<template>

    <div class="image-container" :style="containerStyle">
        <div class="image-rotate-box">
            <img v-if="image.loaded" :src="image.path" alt="Lazy loaded image" class="image" :style="imageStyle" />
            <div class="loading-container" v-else>
                <!-- <Loader type="infinite-spinner" /> -->
                در حال بارگذاری...
            </div>
        </div>
       
    </div>

</template>

<script  setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    image: {
        type: Object as () => { path: string; loaded: boolean; calculateHeight: number; width: number; height: number },
        required: true
    },
    rotateAngle: {
        type: Number,
        default: 0
    }
})

const isRotatedSideways = computed(() => props.rotateAngle % 180 !== 0);

const rotatedContainerWidth = computed(() => {
    return props.image.calculateHeight * (props.image.height / props.image.width);
});

const containerStyle = computed(() => ({
    height: `${props.image.calculateHeight}px`,
    width: isRotatedSideways.value ? `${rotatedContainerWidth.value}px` : 'calc(100% - 20px)'
}));

const imageStyle = computed(() => ({
    transform: `rotate(${props.rotateAngle}deg)`,
    width: isRotatedSideways.value ? `${props.image.calculateHeight}px` : '100%',
    height: 'auto'
}));


</script>
