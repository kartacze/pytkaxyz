import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
  output: 'server',
  adapter: netlify(),
})
