import { type Ref } from 'vue';
export interface UseZoom {
    zoomLevel: Ref<number>;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
}
export declare function useZoom(): UseZoom;
