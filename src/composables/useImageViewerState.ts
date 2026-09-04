import { nextTick, type Ref } from 'vue';
import { defaultImageViewerState, type ImageViewerState, type PartialImageViewerState } from '../types/imageViewerState';

export interface UseImageViewerStateOptions {
    containerRef: Ref<HTMLElement | null>;

    // این getter/setter ها باعث میشوند composable به جزئیات داخلی کامپوننت وابسته نباشد.
    getZoom: () => number;
    setZoom: (zoom: number) => void;
    getPageNumber: () => number;
    setPageNumber: (pageNumber: number) => void;
    getMaxPageNumber: () => number;

    // خروجی v-model واحد را برای مصرفکننده ارسال میکند.
    emit: (event: 'update:modelValue', value: ImageViewerState) => void;
}

function normalizeNumber(value: unknown, fallback: number): number {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

// مقدارهای ناقص یا خالی را با مقدار پیشفرض کامل میکند.
export function normalizeImageViewerState(state?: PartialImageViewerState | null, maxPageNumber = Infinity): ImageViewerState {
    const safeMaxPageNumber = Math.max(1, maxPageNumber);

    return {
        zoom: Math.max(50, normalizeNumber(state?.zoom, defaultImageViewerState.zoom)),
        scrollTop: Math.max(0, normalizeNumber(state?.scrollTop, defaultImageViewerState.scrollTop)),
        scrollLeft: Math.max(0, normalizeNumber(state?.scrollLeft, defaultImageViewerState.scrollLeft)),
        pageNumber: clamp(
            normalizeNumber(state?.pageNumber, defaultImageViewerState.pageNumber),
            1,
            safeMaxPageNumber
        )
    };
}

export function useImageViewerState({
    containerRef,
    getZoom,
    setZoom,
    getPageNumber,
    setPageNumber,
    getMaxPageNumber,
    emit
}: UseImageViewerStateOptions) {
    const getCurrentViewerState = (): ImageViewerState => {
        const container = containerRef.value;

        return normalizeImageViewerState({
            zoom: getZoom(),
            scrollTop: container?.scrollTop ?? defaultImageViewerState.scrollTop,
            scrollLeft: container?.scrollLeft ?? defaultImageViewerState.scrollLeft,
            pageNumber: getPageNumber()
        }, getMaxPageNumber());
    };

    // وضعیت فعلی زوم، اسکرول و شماره صفحه را به بیرون کامپوننت میفرستد.
    const emitViewerState = (): void => {
        emit('update:modelValue', getCurrentViewerState());
    };

    // وضعیت ذخیرهشده مصرفکننده را دوباره روی viewer اعمال میکند.
    const applyViewerState = async (state?: PartialImageViewerState | null): Promise<void> => {
        const nextState = normalizeImageViewerState(state, getMaxPageNumber());
        setZoom(nextState.zoom);
        setPageNumber(nextState.pageNumber);

        // صبر میکنیم تا DOM با zoom و pageNumber جدید render شود،
        // وگرنه scrollLeft به پوزیشنی اسکرول نمیشود که هنوز وجود ندارد.
        await nextTick();
        const container = containerRef.value;

        if (container) {
            container.scrollTop = nextState.scrollTop;
            container.scrollLeft = nextState.scrollLeft;
        }
    };

    return {
        emitViewerState,
        applyViewerState
    };
}
