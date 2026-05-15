import { type Ref, ref } from 'vue';
export interface UseZoom {
    zoomLevel: Ref<number>;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
}

export function useZoom(): UseZoom {
    const zoomLevel: Ref<number> = ref(100);

    const zoomIn: () => void = () => {
        zoomLevel.value += 5;
    };
    const zoomOut: () => void = () => {
        if (zoomLevel.value > 50) zoomLevel.value -= 5;
    };
    const resetZoom: () => void = () => {
        zoomLevel.value = 100;
    };

    return {
        zoomLevel,
        zoomIn,
        zoomOut,
        resetZoom
    };
}