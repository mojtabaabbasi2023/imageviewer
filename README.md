# 🖼️ Vue Image Viewer

An image viewer component for Vue 3, written in TypeScript, providing advanced features like point zoom, lazy loading, and smooth navigation.

[**Live Demo**](https://mojtabaabbasi2023.github.io/imageviewer/)

[![npm version](https://badge.fury.io/js/%40mojtabaabbasi%2Fimage-viewer.svg)](https://badge.fury.io/js/%40mojtabaabbasi%2Fimage-viewer)

## Features

- **Point Zoom**: Zoom in and out towards the cursor's position.
- **Lazy Loading**: Images are loaded on demand as you scroll, improving performance.
- **Drag to Scroll**: Pan across the image by dragging with the mouse.
- **Go to Page**: Instantly jump to any image by entering its page number.
- **Keyboard Scroll**: Navigate using the arrow keys.
- **State Persistence**: Receive and emit viewer state with `v-model:state` to restore zoom, page, and scroll position.
- **TypeScript Support**: Fully written in TypeScript.
- **Customizable**: Add custom controls via slots.

## Installation

Install the package using npm:

```bash
npm install @mojtabaabbasi/image-viewer
```

## Usage

First, import the component and its styles into your project.

```vue
<script setup>
import { ImageViewer } from '@mojtabaabbasi/image-viewer';
import '@mojtabaabbasi/image-viewer/dist/image-viewer.css';
import { ref } from 'vue';

const images = ref([
  { path: 'path/to/image1.jpg', width: 1920, height: 1080 },
  { path: 'path/to/image2.jpg', width: 1280, height: 720 },
]);
</script>

<template>
  <ImageViewer :data-items="images" />
</template>
```

## Props

| Prop Name   | Type                                                              | Required | Description                                   |
|-------------|-------------------------------------------------------------------|----------|-----------------------------------------------|
| `dataItems` | `Array<{ path: string; width: number; height: number; }>`         | `true`   | An array of image objects to display. The `width` and `height` properties are required to calculate the container height before the images are loaded, ensuring a smooth lazy loading experience. |
| `state`     | `{ zoom?: number; scrollTop?: number; scrollLeft?: number; pageNumber?: number; }` | `false`  | External viewer state used to restore the current zoom, scroll position, and page number. Use with `v-model:state` to keep it synced. |

## State Persistence

Use `v-model:state` when you want to save the viewer status and restore it later. The emitted state includes the current `zoom`, `scrollTop`, `scrollLeft`, and `pageNumber`.

 State is applied after `dataItems props` updates. Because of this order, set `state` first and then update `dataItems`.

```vue
<script setup>
import { ref } from 'vue';
import { ImageViewer } from '@mojtabaabbasi/image-viewer';

const images = ref([
  { path: 'path/to/image1.jpg', width: 1920, height: 1080 },
]);

const viewerState = ref({
  zoom: 100,
  scrollTop: 0,
  scrollLeft: 0,
  pageNumber: 1,
});
</script>

<template>
  <ImageViewer v-model:state="viewerState" :data-items="images" />
</template>
```

## Slots

| Slot Name       | Description                                                  |
|-----------------|--------------------------------------------------------------|
| `extraControls` | For adding custom buttons or controls to the toolbar.        |

### Slot Usage Example

```vue
<template>
  <ImageViewer :data-items="images">
    <template #extraControls="{ image }">
      <button @click="downloadImage(image.path)">Download</button>
    </template>
  </ImageViewer>
</template>
```

## Composables

This package also exports the following composables that you can use in your project:

- `useZoom`
- `useDragScroll`
- `useKeyboardScroll`
- `useZoomPoint`

## Development

To run the project locally and contribute:

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
    This command runs the playground where you can test the component.



