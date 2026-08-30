import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      // config for serve
      plugins: [vue()],
      root: resolve(__dirname, 'src/playground'),
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'src/playground/index.html')
          }
        }
      }
    }
  }
  // command === 'build'
  return {
    // config for build
    plugins: [vue()],
    build: {
      lib: {
        entry: 'src/index.ts', // فایل اصلی پکیج
        name: 'ImageViewer',
        fileName: (format) => `image-viewer.${format}.js`
      },
      rollupOptions: {
        external: ['vue'], // vue داخل پکیج باندل نشه
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
})