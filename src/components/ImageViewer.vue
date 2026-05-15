<template>
    <div class="image-gallery">
        <div class="controls">

            <slot name="extraControls" :image="images[pageNumber - 1]">
            </slot>
            <button class="btn p-0" @click="fit">
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    class="svg-icon">
                    <path
                        d="M388.6 128H123.4c-15.1 0-27.4 12.3-27.4 27.4v201.2c0 15.1 12.3 27.4 27.4 27.4h265.2c15.1 0 27.4-12.3 27.4-27.4V155.4c0-15.1-12.3-27.4-27.4-27.4zM384 320l-48-64-48 64-80-96-80 96V160h256v160zM0 160l96 96-96 96V160zm160 320 96-96 96 96H160zM352 32l-96 96-96-96h192zm160 128v192l-96-96 96-96zm-256 64c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z">
                    </path>
                </svg>
            </button>
            <button class="btn p-0" @click="zoomInAll">
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    class="svg-icon">
                    <path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64H288z"></path>
                </svg>
            </button>
            <button class="btn p-0" @click="zoomOutAll">
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    class="svg-icon">
                    <path d="M96 224v64h320v-64H96z"></path>
                </svg>
            </button>
            {{ images.length }} /

            <input type="number" v-model="pageNumber" @keyup.enter="goToPage" class="no-spinner page-number"
                @wheel="($event) => (($event.target as HTMLInputElement).blur())" :min="1" />

        </div>

        <div :class="`images-scroll ${isDragging ? 'isDragging' : ''}`" ref="imagegallery" tabindex="0"
            @wheel="handleWheel" @scroll="handleScroll" @mousedown.left.prevent="startDrag" @mouseleave="stopDragg"
            @mouseup="stopDrag" @mousemove="onMove" dir="ltr" @mouseenter="isHover = true">
            <div class="images" :style="getImageWidth" ref="gallery">
                <ImageItem v-for="(image, index) in images" :key="index" :image="image" :ref="'image' + index" />
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { useDragScroll } from '../composables/useDragScroll';
import { useKeyboardScroll } from '../composables/useKeyboardScroll';
import { useZoom } from '../composables/useZoom';
import { useZoomPoint } from '../composables/useZoomPoint';
import ImageItem from './ImageItem.vue';
import { nextTick, type Ref, ref } from 'vue';
import { defineComponent } from 'vue'


export default defineComponent({
    components: {
        ImageItem
    },
    props: {
        dataItems: {
            type: Array as () => Array<{ path: string; width: number; height: number; }>,
            required: true
        }
    },
    data(): {
        images: Array<{ path: string; width: number; height: number; loaded: boolean; calculateHeight: number }>,
        rotateAngle: number,
        pageNumber: number,
        visibleImages: Array<any>,
        pageSize: number,
        observer: IntersectionObserver | null,
        ratio: number,
        height: number,
        isScrolling: boolean,
        imageIndex: number,
        scrollTimeout: any,
        resizeObserver: null | ResizeObserver
    } {
        return {
            images: this.dataItems.map((src) => ({ ...src, loaded: false, calculateHeight: this.calculateHeight(src.width, src.height) })),
            rotateAngle: 0,
            pageNumber: 1,
            visibleImages: [],
            pageSize: 1,
            observer: null,
            ratio: 0.75,
            height: 0,
            isScrolling: false,
            imageIndex: 1,
            scrollTimeout: null,
            resizeObserver: null
        };
    },
    setup() {
        const imagegallery: Ref<HTMLElement | null> = ref(null);
        const { zoomLevel, zoomIn, zoomOut, resetZoom } = useZoom();
        const { isDragging, startDrag, stopDrag, onMove } = useDragScroll(imagegallery);
        const isHover = ref(false);
        useKeyboardScroll({ containerRef: imagegallery, enabled: isHover });
        const { setScrollTopAfterZoom } = useZoomPoint({ containerRef: imagegallery });
        return {
            zoomLevel,
            zoomIn,
            zoomOut,
            resetZoom,
            isDragging,
            startDrag,
            stopDrag,
            onMove,
            imagegallery,
            setScrollTopAfterZoom,
            isHover
        };
    },

    watch: {
        dataItems: {
            async handler(newItems: Array<{ path: string; width: number; height: number }>) {
                // ابتدا فقط loaded را مقداردهی کن
                this.images = newItems.map((src) => ({ ...src, loaded: false, calculateHeight: 0 }));
                await this.$nextTick();
                // حالا که ref مقدار دارد، ارتفاع را محاسبه کن
                this.setCalculateHeight();
                this.imageThreeLoad(1);
                this.initObserver();
            },
            immediate: true
        }
    },

    mounted() {
        this.initResizeObserver();
    },

    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    },

    methods: {
        calculateHeight(width: number, height: number): number {
            const container = this.$refs.gallery as HTMLElement;
            if (container) {
                const containerWidth = container.offsetWidth - 20;
                const ratio = height / width;
                return containerWidth * ratio;
            }
            return 0;
        },
        rotateAllImages(): void {
            this.rotateAngle = (this.rotateAngle + 90) % 360;
        },
        setCalculateHeight(): void {
            this.images = this.images.map(src => ({
                ...src,
                calculateHeight: this.calculateHeight(src.width, src.height)
            }));
        },
        async executeWithResizeObserverPaused(zoomAction: () => Promise<void> | void): Promise<void> {
            await zoomAction();
            await nextTick();
            this.setCalculateHeight();
        },
        handleZoomAction(e: WheelEvent | undefined, action: () => void, centerViewport?: boolean): void {
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
            }
            this.setScrollTopAfterZoom(
                e,
                () => this.executeWithResizeObserverPaused(action),
                centerViewport
            );
            this.initResizeObserver();
        },
        zoomInAll(): void {
            this.handleZoomAction(undefined, () => this.zoomIn(), true);
        },
        zoomOutAll(): void {
            this.handleZoomAction(undefined, () => this.zoomOut(), true);
        },
        fit(): void {
            this.handleZoomAction(undefined, () => this.resetZoom(), true);
        },
        handleWheel(e: WheelEvent): void {
            if (e.ctrlKey) {
                e.preventDefault();

                this.handleZoomAction(e, () => {
                    if (e.deltaY < 0) {
                        this.zoomIn();
                    } else {
                        this.zoomOut();
                    }
                });
            }
        },
        imageThreeLoad(imageIndex: number): void {
            for (let i = imageIndex - 1; i <= imageIndex + 1; i++) {
                if (this.images[i] && !this.images[i].loaded) {
                    this.images[i].loaded = true;
                }
            }
        },
        handleScroll(): void {
            this.isScrolling = true;
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
                this.imageThreeLoad(this.imageIndex);
            }, 100);
        },
        initObserver(): void {
            if (this.observer) this.observer.disconnect();
            const options = {
                root: this.imagegallery,
                threshold: Array.from({ length: 21 }, (_, i) => i / 20)
            };
            this.observer = new IntersectionObserver((entries) => {
                let currentRatio = 0;
                let currentIndex = this.pageNumber - 1;
                entries.forEach((entry) => {
                    const parent = entry.target.parentNode;
                    if (!parent) return;
                    const index = Array.from((parent as HTMLElement).children).indexOf(entry.target as HTMLElement);
                    if (entry.isIntersecting) {
                        this.imageIndex = index;
                    }
                    if (entry.isIntersecting && entry.intersectionRatio > currentRatio) {
                        currentRatio = entry.intersectionRatio;
                        currentIndex = index;
                    }
                });
                if (currentRatio >= 0.3) {
                    this.pageNumber = currentIndex + 1;
                }
            }, options);
            this.$nextTick(() => {
                const imageContainers = (this.$el as HTMLElement).querySelectorAll('.image-container');
                imageContainers.forEach((el) => {
                    this.observer!.observe(el);
                });
            });
        },
        initResizeObserver(): void {
            if (this.resizeObserver) this.resizeObserver.disconnect();
            const container = this.$refs.gallery as HTMLElement;
            let ignoreFirst = true;
            this.resizeObserver = new window.ResizeObserver(() => {
                if (ignoreFirst) {
                    ignoreFirst = false;
                    return;
                }
                this.setCalculateHeight();
            });
            this.resizeObserver.observe(container);
        },
        goToPage(): void {
            const index = this.pageNumber - 1;
            if (index >= 0 && index < this.images.length) {
                // if (this.observer) this.observer.disconnect();
                // this.imageThreeLoad(index);
                const targetEl = (this.$refs['image' + index] as any)?.[0]?.$el as HTMLElement;
                if (targetEl && this.imagegallery) {
                    (this.imagegallery as HTMLElement).scrollTo({
                        top: targetEl.offsetTop,
                    });
                    // setTimeout(() => {
                    //     this.initObserver();
                    // }, 1000);
                }
            }
        },
        stopDragg(): void {
            this.stopDrag();
            this.isHover = false;
        },
    },

    computed: {
        getImageWidth() {
            return {
                // transition: 'transform,width 0.2s', // Smooth transition when zooming or rotating  
                width: `${this.zoomLevel}%`
            };
        },

    }
});
</script>
