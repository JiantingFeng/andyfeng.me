import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import UnocssIcons from '@unocss/preset-icons'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      // when `presets` is specified, the default preset will be disabled
      // so you could only use the pure CSS icons in addition to your
      // existing app without polluting other CSS
      presets: [
        presetAttributify(),
        presetUno(),
        UnocssIcons({
          // options
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block',
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
