# 🖼️ Vue Image Viewer

An image viewer component for Vue 3, written in TypeScript, providing advanced features like point zoom, lazy loading, and smooth navigation.

[![npm version](https://badge.fury.io/js/%40mojtabaabbasi%2Fimage-viewer.svg)](https://badge.fury.io/js/%40mojtabaabbasi%2Fimage-viewer)

## Features

- **Point Zoom**: Zoom in and out towards the cursor's position.
- **Lazy Loading**: Images are loaded on demand as you scroll, improving performance.
- **Drag to Scroll**: Pan across the image by dragging with the mouse.
- **Go to Page**: Instantly jump to any image by entering its page number.
- **Keyboard Scroll**: Navigate using the arrow keys.
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



