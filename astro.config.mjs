import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import mdx from '@astrojs/mdx'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  site: 'https://pytka.xyz',
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
  ],
  output: 'static',
  // Fully static site: skip the KV namespace the adapter provisions for sessions
  session: false,

  adapter: cloudflare({
    // Optimize images at build time; 'cloudflare' needs Image Transformations
    // enabled on the zone, otherwise /cdn-cgi/image/... URLs break
    imageService: 'compile',
  }),
})
