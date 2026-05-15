import { type Ref,nextTick } from 'vue';
interface UseZoomPointOptions {
    containerRef: Ref<HTMLElement | null>;
}

type ZoomFn = () => Promise<void> | void;

export function useZoomPoint({ containerRef }: UseZoomPointOptions) {
    /**
     * @param e WheelEvent | undefined
     * @param zoom function to perform zoom
     * @param centerViewport whether to center on viewport
     */
    const setScrollTopAfterZoom = async (
        e: WheelEvent | undefined,
        zoom: ZoomFn,
        centerViewport: boolean = false
    ): Promise<void> => {
        const viewer = containerRef.value;
        if (!viewer) return;

        const rect = viewer.getBoundingClientRect();

        let refX: number, refY: number;

        if (centerViewport) {
            refX = viewer.scrollLeft + rect.width / 2;
            refY = viewer.scrollTop + rect.height / 2;
        } else if (e) {
            refX = e.clientX - rect.left + viewer.scrollLeft;
            refY = e.clientY - rect.top + viewer.scrollTop;
        } else {
            refX = 0;
            refY = 0;
        }

        const oldScrollHeight = viewer.scrollHeight || 1;
        const oldScrollWidth = viewer.scrollWidth || 1;

        const percentY = refY / oldScrollHeight;
        const percentX = refX / oldScrollWidth;

        await zoom();

        nextTick(() => {
            const newScrollHeight = viewer.scrollHeight || 1;
            const newScrollWidth = viewer.scrollWidth || 1;

            viewer.scrollTop = Math.max(
                0,
                percentY * newScrollHeight - (centerViewport ? rect.height / 2 : e?.clientY !== undefined ? e.clientY - rect.top : 0)
            );

            viewer.scrollLeft = Math.max(
                0,
                percentX * newScrollWidth - (centerViewport ? rect.width / 2 : e?.clientX !== undefined ? e.clientX - rect.left : 0)
            );
        });
    };

    return {
        setScrollTopAfterZoom
    };
}