import { onBeforeUnmount, onMounted, ref } from 'vue';
export function useKeyboardScroll({ containerRef, enabled = ref(true), step = 40, keyMap = null }) {
    const defaultKeyMap = {
        ArrowDown: (c, s) => c.scrollTop += s,
        ArrowUp: (c, s) => c.scrollTop -= s,
        ArrowLeft: (c, s) => c.scrollLeft -= s,
        ArrowRight: (c, s) => c.scrollLeft += s,
        PageDown: (c) => c.scrollTop += c.clientHeight,
        PageUp: (c) => c.scrollTop -= c.clientHeight,
        Home: (c) => c.scrollTop = 0,
        End: (c) => c.scrollTop = c.scrollHeight
    };
    const map = keyMap || defaultKeyMap;
    const handler = (e) => {
        if (!enabled.value)
            return;
        const el = containerRef?.value;
        if (!el)
            return;
        const fn = map[e.key];
        if (fn) {
            fn(el, step);
            e.preventDefault();
        }
    };
    onMounted(() => {
        window.addEventListener('keydown', handler);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handler);
    });
    return {
        handler
    };
}
