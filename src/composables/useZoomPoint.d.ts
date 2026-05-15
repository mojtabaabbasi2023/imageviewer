import { type Ref } from 'vue';
interface UseZoomPointOptions {
    containerRef: Ref<HTMLElement | null>;
}
type ZoomFn = () => Promise<void> | void;
export declare function useZoomPoint({ containerRef }: UseZoomPointOptions): {
    setScrollTopAfterZoom: (e: WheelEvent | undefined, zoom: ZoomFn, centerViewport?: boolean) => Promise<void>;
};
export {};
