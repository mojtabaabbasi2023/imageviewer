import { type Ref } from 'vue';
export declare function useDragScroll(containerRef: Ref<HTMLElement | null>): {
    isDragging: Ref<boolean, boolean>;
    startDrag: (e: MouseEvent) => void;
    stopDrag: () => void;
    onMove: (e: MouseEvent) => void;
};
