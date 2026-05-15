<template>

    <div class="image-container" :style="{ height: image.calculateHeight + 'px' }">
        <img v-if="image.loaded" :src="image.path" alt="Lazy loaded image" class="image" />
        <div class="loading-container" v-else>
            <!-- <Loader type="infinite-spinner" /> -->
            در حال بارگذاری...
        </div>
       
    </div>

</template>

<script  setup lang="ts">

defineProps({
    image: {
        type: Object as () => { path: string; loaded: boolean; calculateHeight: number },
        required: true
    }
}) 


</script>
