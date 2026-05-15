import { type Ref } from 'vue';
export declare function useKeyboardScroll({ containerRef, enabled, step, keyMap }: {
    containerRef: Ref<HTMLElement | null>;
    enabled?: Ref<boolean>;
    step?: number;
    keyMap?: Record<string, (c: HTMLElement, s: number) => void> | null;
}): {
    handler: (e: KeyboardEvent) => void;
};
