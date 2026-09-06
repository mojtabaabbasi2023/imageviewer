<script setup lang="ts">
import { computed, ref } from 'vue';
import ImageViewer from '../components/ImageViewer.vue'
import { useImageViewerState } from './useMaintainViewerStatus.ts';

const { viewerState, saveViewerState, setActiveVolume } = useImageViewerState();

const selectedVolumeId = ref('G1');
const activeVolumeId = ref(selectedVolumeId.value);

setActiveVolume(activeVolumeId.value);

const volumes = [
  Array.from({ length: 12 }, () => ({
    path: 'd-a-z-h-mohammad.jpg',
    width: 1424,
    height: 2208
  })),
  Array.from({ length: 8 }, () => ({
    path: 'd-a-z-h-mohammad.jpg',
    width: 1424,
    height: 2208
  }))
];

const volumeList = [
  { value: 'G1' },
  { value: 'G2' }
];

const images = computed(() => {
  const index = volumeList.findIndex(volume => volume.value === activeVolumeId.value);
  return volumes[index] ?? [];
});

const changeVolume = (): void => {
  saveViewerState();
  const newVolumeId = selectedVolumeId.value;
  setActiveVolume(newVolumeId);
  activeVolumeId.value = newVolumeId;
};
</script>

<template>
  <div class="playground-layout">
    <div class="playground-viewer-column-1">
      <ImageViewer v-model:state="viewerState" :data-items="images" />
    </div>

    <div class="playground-info-column playground-viewer-column-2">
      <div class="playground-state-controls">
        <label>
          Volume:
          <select v-model="selectedVolumeId" @change="changeVolume">
            <option v-for="volume in volumeList" :key="volume.value" :value="volume.value">
              {{ volume.value }}
            </option>
          </select>
        </label>
      </div>

      <div class="playground-description">
        <h1>Persisting viewer state</h1>
        <p>
          The image viewer can receive external state and use it to restore the active page,
          zoom level, and scroll position.
        </p>
        <p>
          It also emits its current internal state through <code>v-model:state</code>, so the parent
          can save it and provide it again later.
        </p>

        <p>
          <strong>Note:</strong> State is applied after the <code>dataItems</code> prop updates. To restore
          a saved state correctly, update the state first, then update <code>dataItems</code>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playground-layout {
  display: flex;
  flex-direction: row;
}

.playground-viewer-column-1 {
  width: 40%;
}

.playground-viewer-column-2 {
  width: 60%;
}

.playground-info-column {

  padding: 24px;
  border-left: 1px solid var(--border);
  background: var(--social-bg);
}

.playground-state-controls {
  margin-bottom: 24px;
}

.playground-state-controls label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-h);
  font-weight: 600;
}

.playground-state-controls select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-h);
  background: var(--bg);
  font: inherit;
}

.playground-description h1 {
  margin: 0 0 16px;
  color: var(--text-h);
  font-size: 28px;
  line-height: 1.15;
}

.playground-description p {
  margin: 0 0 14px;
}

.playground-description code {
  padding: 2px 6px;
  border-radius: 6px;
  background: var(--code-bg);
  color: var(--text-h);
}

@media (max-width: 900px) {
  .playground-layout {
    flex-direction: column;
  }

  .playground-info-column {
    flex-basis: auto;
    border-left: 0;
    border-top: 1px solid var(--border);
  }
}
</style>
