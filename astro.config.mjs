import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import mdx from '@astrojs/mdx'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
  ],
  output: 'static',

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: 'cloudflare',
  }),
})
