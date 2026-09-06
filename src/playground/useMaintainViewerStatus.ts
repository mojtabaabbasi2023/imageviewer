import { defaultImageViewerState, type ImageViewerState } from '../types/imageViewerState';
import { onBeforeUnmount, ref } from 'vue';
const STORAGE_KEY = 'image-viewer-state';

const getAllSavedViewerStates = (): Record<string, ImageViewerState> => {
    const savedStates = localStorage.getItem(STORAGE_KEY);

    if (!savedStates) return {};

    try {
        return JSON.parse(savedStates);
    } catch {
        return {};
    }
};

export function useImageViewerState() {
    const activeVolumeId = ref<string | null>(null);
    const viewerState = ref<ImageViewerState>({ ...defaultImageViewerState });

    const getSavedViewerState = (volumeId: string | null = activeVolumeId.value): ImageViewerState => {
        if (!volumeId) return { ...defaultImageViewerState };

        const savedState = getAllSavedViewerStates()[volumeId];

        return {
            ...defaultImageViewerState,
            ...(savedState || {})
        };
    };

    const setActiveVolume = (volumeId: string | null): void => {
        viewerState.value = getSavedViewerState(volumeId);
        activeVolumeId.value = volumeId;
    };

    const resetViewerState = (): void => {
        localStorage.removeItem(STORAGE_KEY);
        activeVolumeId.value = null;
        viewerState.value = { ...defaultImageViewerState };
    };

    const saveViewerState = (): void => {
        if (!activeVolumeId.value) return;

        const savedStates = getAllSavedViewerStates();
        savedStates[activeVolumeId.value] = viewerState.value;

        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedStates));
    };

    const handleBeforeUnload = (): void => {
        saveViewerState();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    onBeforeUnmount(() => {
        resetViewerState();
        window.removeEventListener('beforeunload', handleBeforeUnload);
    });

    return {
        viewerState,
        saveViewerState,
        setActiveVolume,
        resetViewerState
    };
}
