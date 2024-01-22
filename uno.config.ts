import { defineConfig, presetMini, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetMini({
      theme: {
        colors: {
          brown: {
            primary: '#965635',
          },
        },
      },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['IBM Plex Mono', 'IBM Plex Mono:300,400'],
      },
    }),
  ],
})
