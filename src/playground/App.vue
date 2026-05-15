<script setup lang="ts">
import { ref } from 'vue';
import ImageViewer from '../components/ImageViewer.vue'

const images = ref([
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 614,
    height: 900
  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 627,
    height: 900
  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 652,
    height: 900
  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 647,
    height: 900

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 649,
    height: 900,

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 654,
    height: 900,

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 634,
    height: 900,

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 653,
    height: 900,

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 643,
    height: 900,

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 647,
    height: 900,

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 635,
    height: 900,

  },
  {
    path: "https://farsiocr.ir/wp-content/uploads/2013/12/d-a-z-h-mohammad.jpg",
    width: 648,
    height: 900,

  }
]);
</script>

<template>
  <ImageViewer :data-items="images" />
</template>
