export interface ImageViewerState {
    zoom: number;
    scrollTop: number;
    scrollLeft: number;
    pageNumber: number;
}

export type PartialImageViewerState = Partial<ImageViewerState>;

export const defaultImageViewerState: ImageViewerState = {
    zoom: 100,
    scrollTop: 0,
    scrollLeft: 0,
    pageNumber: 1
};
