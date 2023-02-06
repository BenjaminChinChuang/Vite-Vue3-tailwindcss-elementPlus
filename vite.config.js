import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

const Src = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '/@': Src,
      Components: path.resolve(__dirname, './src/components'),
      Services: path.resolve(__dirname, './src/services'),
      Utils: path.resolve(__dirname, './src/utils'),
      Styles: path.resolve(__dirname, './src/assets/styles'),
      Assets: path.resolve(__dirname, './src/assets'),
      Icons: path.resolve(__dirname, './src/icons'),
      Pages: path.resolve(__dirname, './src/pages')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "Styles/element-variables" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    ElementPlus({}),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});

