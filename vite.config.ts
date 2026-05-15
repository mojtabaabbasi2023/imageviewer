import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      include: ['src'],
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: false
    })
  ],
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
})