import { onBeforeUnmount, onMounted,type Ref, ref  } from 'vue'

export function useKeyboardScroll({
    containerRef,
    enabled = ref(true),
    step = 40,
    keyMap = null
}: {
    containerRef: Ref<HTMLElement | null>,
    enabled?: Ref<boolean>,
    step?: number,
    keyMap?: Record<string, (c: HTMLElement, s: number) => void> | null
}) {

    const defaultKeyMap: Record<string, (c: HTMLElement, s: number) => void> = {
        ArrowDown: (c, s) => c.scrollTop += s,
        ArrowUp: (c, s) => c.scrollTop -= s,
        ArrowLeft: (c, s) => c.scrollLeft -= s,
        ArrowRight: (c, s) => c.scrollLeft += s,

        PageDown: (c) => c.scrollTop += c.clientHeight,
        PageUp: (c) => c.scrollTop -= c.clientHeight,

        Home: (c) => c.scrollTop = 0,
        End: (c) => c.scrollTop = c.scrollHeight
    }

    const map: Record<string, (c: HTMLElement, s: number) => void> = keyMap || defaultKeyMap

    const handler = (e: KeyboardEvent): void => {
        if (!enabled.value) return

        const el = containerRef?.value
        if (!el) return

        const fn: ((c: HTMLElement, s: number) => void) | undefined = map[e.key]

        if (fn) {
            fn(el, step)
            e.preventDefault()
        }
    }

    onMounted(() => {
        window.addEventListener('keydown', handler)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handler)
    })

    return {
        handler
    }
}