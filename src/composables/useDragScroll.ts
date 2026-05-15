import { type Ref, ref } from 'vue';

export function useDragScroll(containerRef: Ref<HTMLElement | null>) {
    const isDragging = ref(false)
    const startX = ref(0)
    const startY = ref(0)
    const scrollLeft = ref(0)
    const scrollTop = ref(0)

    const startDrag = (e: MouseEvent): void => {
        const el = containerRef.value
        if (!el) return

        isDragging.value = true
        startX.value = e.pageX - el.offsetLeft
        startY.value = e.pageY - el.offsetTop
        scrollLeft.value = el.scrollLeft
        scrollTop.value = el.scrollTop
    }

    const stopDrag = (): void => {
        isDragging.value = false
    }

    const onMove = (e: MouseEvent): void => {
        if (!isDragging.value) return
        const el = containerRef.value
        if (!el) return

        const x = e.pageX - el.offsetLeft
        const y = e.pageY - el.offsetTop

        el.scrollLeft = scrollLeft.value - (x - startX.value) * 2
        el.scrollTop = scrollTop.value - (y - startY.value) * 2
    }

    return {
        isDragging,
        startDrag,
        stopDrag,
        onMove
    }
}