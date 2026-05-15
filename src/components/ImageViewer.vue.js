import { useDragScroll } from '../composables/useDragScroll';
import { useKeyboardScroll } from '../composables/useKeyboardScroll';
import { useZoom } from '../composables/useZoom';
import { useZoomPoint } from '../composables/useZoomPoint';
import ImageItem from './ImageItem.vue';
import { nextTick, ref } from 'vue';
import { defineComponent } from 'vue';
export default {};
;
const __VLS_ctx = {};
const __VLS_componentsOption = {
    ImageItem
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "image-gallery" },
});
/** @type {__VLS_StyleScopedClasses['image-gallery']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "controls" },
});
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
var __VLS_0 = {
    image: (__VLS_ctx.images[__VLS_ctx.pageNumber - 1]),
};
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.fit) },
    ...{ class: "btn p-0" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    'aria-hidden': "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ...{ class: "svg-icon" },
});
/** @type {__VLS_StyleScopedClasses['svg-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.path, __VLS_intrinsics.path)({
    d: "M388.6 128H123.4c-15.1 0-27.4 12.3-27.4 27.4v201.2c0 15.1 12.3 27.4 27.4 27.4h265.2c15.1 0 27.4-12.3 27.4-27.4V155.4c0-15.1-12.3-27.4-27.4-27.4zM384 320l-48-64-48 64-80-96-80 96V160h256v160zM0 160l96 96-96 96V160zm160 320 96-96 96 96H160zM352 32l-96 96-96-96h192zm160 128v192l-96-96 96-96zm-256 64c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.zoomInAll) },
    ...{ class: "btn p-0" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    'aria-hidden': "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ...{ class: "svg-icon" },
});
/** @type {__VLS_StyleScopedClasses['svg-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.path, __VLS_intrinsics.path)({
    d: "M288 224V96h-64v128H96v64h128v128h64V288h128v-64H288z",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.zoomOutAll) },
    ...{ class: "btn p-0" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    'aria-hidden': "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ...{ class: "svg-icon" },
});
/** @type {__VLS_StyleScopedClasses['svg-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.path, __VLS_intrinsics.path)({
    d: "M96 224v64h320v-64H96z",
});
(__VLS_ctx.images.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onKeyup: (__VLS_ctx.goToPage) },
    ...{ onWheel: (($event) => ($event.target.blur())) },
    type: "number",
    ...{ class: "no-spinner page-number" },
    min: (1),
});
(__VLS_ctx.pageNumber);
/** @type {__VLS_StyleScopedClasses['no-spinner']} */ ;
/** @type {__VLS_StyleScopedClasses['page-number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onWheel: (__VLS_ctx.handleWheel) },
    ...{ onScroll: (__VLS_ctx.handleScroll) },
    ...{ onMousedown: (__VLS_ctx.startDrag) },
    ...{ onMouseleave: (__VLS_ctx.stopDragg) },
    ...{ onMouseup: (__VLS_ctx.stopDrag) },
    ...{ onMousemove: (__VLS_ctx.onMove) },
    ...{ onMouseenter: (...[$event]) => {
            __VLS_ctx.isHover = true;
            // @ts-ignore
            [images, images, pageNumber, pageNumber, fit, zoomInAll, zoomOutAll, goToPage, handleWheel, handleScroll, startDrag, stopDragg, stopDrag, onMove, isHover,];
        } },
    ...{ class: (`images-scroll ${__VLS_ctx.isDragging ? 'isDragging' : ''}`) },
    ref: "imagegallery",
    tabindex: "0",
    dir: "ltr",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "images" },
    ...{ style: (__VLS_ctx.getImageWidth) },
    ref: "gallery",
});
/** @type {__VLS_StyleScopedClasses['images']} */ ;
for (const [image, index] of __VLS_vFor((__VLS_ctx.images))) {
    let __VLS_2;
    /** @ts-ignore @type {typeof __VLS_components.ImageItem} */
    ImageItem;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent1(__VLS_2, new __VLS_2({
        key: (index),
        image: (image),
        ref: ('image' + index),
    }));
    const __VLS_4 = __VLS_3({
        key: (index),
        image: (image),
        ref: ('image' + index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    // @ts-ignore
    [images, isDragging, getImageWidth,];
}
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[];
const __VLS_export = defineComponent({
    components: {
        ImageItem
    },
    props: {
        dataItems: {
            type: Array,
            required: true
        }
    },
    data() {
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
        const imagegallery = ref(null);
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
            async handler(newItems) {
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
        calculateHeight(width, height) {
            const container = this.$refs.gallery;
            if (container) {
                const containerWidth = container.offsetWidth - 20;
                const ratio = height / width;
                return containerWidth * ratio;
            }
            return 0;
        },
        rotateAllImages() {
            this.rotateAngle = (this.rotateAngle + 90) % 360;
        },
        setCalculateHeight() {
            this.images = this.images.map(src => ({
                ...src,
                calculateHeight: this.calculateHeight(src.width, src.height)
            }));
        },
        async executeWithResizeObserverPaused(zoomAction) {
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
            }
            await zoomAction();
            await nextTick();
            this.setCalculateHeight();
            this.initResizeObserver();
        },
        handleZoomAction(e, action, centerViewport) {
            this.setScrollTopAfterZoom(e, () => this.executeWithResizeObserverPaused(action), centerViewport);
        },
        zoomInAll() {
            this.handleZoomAction(undefined, () => this.zoomIn(), true);
        },
        zoomOutAll() {
            this.handleZoomAction(undefined, () => this.zoomOut(), true);
        },
        fit() {
            this.handleZoomAction(undefined, () => this.resetZoom(), true);
        },
        handleWheel(e) {
            if (e.ctrlKey) {
                e.preventDefault();
                this.handleZoomAction(e, () => {
                    if (e.deltaY < 0) {
                        this.zoomIn();
                    }
                    else {
                        this.zoomOut();
                    }
                });
            }
        },
        imageThreeLoad(imageIndex) {
            for (let i = imageIndex - 1; i <= imageIndex + 1; i++) {
                if (this.images[i] && !this.images[i].loaded) {
                    this.images[i].loaded = true;
                }
            }
        },
        handleScroll() {
            this.isScrolling = true;
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
                this.imageThreeLoad(this.imageIndex);
            }, 100);
        },
        initObserver() {
            if (this.observer)
                this.observer.disconnect();
            const options = {
                root: this.imagegallery,
                threshold: Array.from({ length: 21 }, (_, i) => i / 20)
            };
            this.observer = new IntersectionObserver((entries) => {
                let currentRatio = 0;
                let currentIndex = this.pageNumber - 1;
                entries.forEach((entry) => {
                    const parent = entry.target.parentNode;
                    if (!parent)
                        return;
                    const index = Array.from(parent.children).indexOf(entry.target);
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
                const imageContainers = this.$el.querySelectorAll('.image-container');
                imageContainers.forEach((el) => {
                    this.observer.observe(el);
                });
            });
        },
        initResizeObserver() {
            if (this.resizeObserver)
                this.resizeObserver.disconnect();
            const container = this.$refs.gallery;
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
        goToPage() {
            const index = this.pageNumber - 1;
            if (index >= 0 && index < this.images.length) {
                // if (this.observer) this.observer.disconnect();
                // this.imageThreeLoad(index);
                const targetEl = this.$refs['image' + index]?.[0]?.$el;
                if (targetEl && this.imagegallery) {
                    this.imagegallery.scrollTo({
                        top: targetEl.offsetTop,
                    });
                    // setTimeout(() => {
                    //     this.initObserver();
                    // }, 1000);
                }
            }
        },
        stopDragg() {
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
