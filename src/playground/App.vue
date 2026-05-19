<script setup lang="ts">
import { ref } from 'vue';
import ImageViewer from '../components/ImageViewer.vue'

const images = ref([
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208
  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208
  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208
  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  },
  {
    path: "/d-a-z-h-mohammad.jpg",
    width: 1424,
    height: 2208,

  }
]);
</script>

<template>
  <ImageViewer :data-items="images" />
</template>
