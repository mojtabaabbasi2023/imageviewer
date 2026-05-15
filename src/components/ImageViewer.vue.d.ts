import { type Ref } from 'vue';
declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    dataItems: {
        type: () => Array<{
            path: string;
            width: number;
            height: number;
        }>;
        required: true;
    };
}>, {
    zoomLevel: Ref<number, number>;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
    isDragging: Ref<boolean, boolean>;
    startDrag: (e: MouseEvent) => void;
    stopDrag: () => void;
    onMove: (e: MouseEvent) => void;
    imagegallery: Ref<HTMLElement | null, HTMLElement | null>;
    setScrollTopAfterZoom: (e: WheelEvent | undefined, zoom: () => Promise<void> | void, centerViewport?: boolean) => Promise<void>;
    isHover: Ref<boolean, boolean>;
}, {
    images: Array<{
        path: string;
        width: number;
        height: number;
        loaded: boolean;
        calculateHeight: number;
    }>;
    rotateAngle: number;
    pageNumber: number;
    visibleImages: Array<any>;
    pageSize: number;
    observer: IntersectionObserver | null;
    ratio: number;
    height: number;
    isScrolling: boolean;
    imageIndex: number;
    scrollTimeout: any;
    resizeObserver: null | ResizeObserver;
}, {
    getImageWidth(): {
        width: string;
    };
}, {
    calculateHeight(width: number, height: number): number;
    rotateAllImages(): void;
    setCalculateHeight(): void;
    executeWithResizeObserverPaused(zoomAction: () => Promise<void> | void): Promise<void>;
    handleZoomAction(e: WheelEvent | undefined, action: () => void, centerViewport?: boolean): void;
    zoomInAll(): void;
    zoomOutAll(): void;
    fit(): void;
    handleWheel(e: WheelEvent): void;
    imageThreeLoad(imageIndex: number): void;
    handleScroll(): void;
    initObserver(): void;
    initResizeObserver(): void;
    goToPage(): void;
    stopDragg(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    dataItems: {
        type: () => Array<{
            path: string;
            width: number;
            height: number;
        }>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {
    ImageItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        image: {
            type: () => {
                path: string;
                loaded: boolean;
                calculateHeight: number;
            };
            required: true;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        image: {
            type: () => {
                path: string;
                loaded: boolean;
                calculateHeight: number;
            };
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
