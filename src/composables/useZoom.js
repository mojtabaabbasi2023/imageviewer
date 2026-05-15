import { ref } from 'vue';
export function useZoom() {
    const zoomLevel = ref(100);
    const zoomIn = () => {
        zoomLevel.value += 5;
    };
    const zoomOut = () => {
        if (zoomLevel.value > 50)
            zoomLevel.value -= 5;
    };
    const resetZoom = () => {
        zoomLevel.value = 100;
    };
    return {
        zoomLevel,
        zoomIn,
        zoomOut,
        resetZoom
    };
}
