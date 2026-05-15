import { nextTick } from 'vue';
export function useZoomPoint({ containerRef }) {
    /**
     * @param e WheelEvent | undefined
     * @param zoom function to perform zoom
     * @param centerViewport whether to center on viewport
     */
    const setScrollTopAfterZoom = async (e, zoom, centerViewport = false) => {
        const viewer = containerRef.value;
        if (!viewer)
            return;
        const rect = viewer.getBoundingClientRect();
        let refX, refY;
        if (centerViewport) {
            refX = viewer.scrollLeft + rect.width / 2;
            refY = viewer.scrollTop + rect.height / 2;
        }
        else if (e) {
            refX = e.clientX - rect.left + viewer.scrollLeft;
            refY = e.clientY - rect.top + viewer.scrollTop;
        }
        else {
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
            viewer.scrollTop = Math.max(0, percentY * newScrollHeight - (centerViewport ? rect.height / 2 : e?.clientY !== undefined ? e.clientY - rect.top : 0));
            viewer.scrollLeft = Math.max(0, percentX * newScrollWidth - (centerViewport ? rect.width / 2 : e?.clientX !== undefined ? e.clientX - rect.left : 0));
        });
    };
    return {
        setScrollTopAfterZoom
    };
}
