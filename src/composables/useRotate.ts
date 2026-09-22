import { computed, ref } from 'vue';

export function useRotate(initialAngle = 0) {
    const rotateAngle = ref(initialAngle);
    const isRotatedSideways = computed(() => rotateAngle.value % 180 !== 0);

    const rotateClockwise = (): void => {
        rotateAngle.value = (rotateAngle.value + 90) % 360;
    };

    return {
        rotateAngle,
        isRotatedSideways,
        rotateClockwise
    };
}
