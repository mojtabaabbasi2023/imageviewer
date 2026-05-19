import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import dts from 'vite-plugin-dts'

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
    plugins: [
      vue()
      // dts({
      //   entryRoot: 'src',
      //   include: ['src'],
      //   insertTypesEntry: true,
      //   cleanVueFileName: true,
      //   copyDtsFiles: false
      // })
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
  }
})