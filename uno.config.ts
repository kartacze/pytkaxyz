import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetAttributify,
  presetTypography,
  presetWind4,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--brown)',
    },
  },
  presets: [
    presetWind4(),
    presetAttributify(),
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
        mono: 'IBM Plex Mono:300,400',
      },
    }),
    presetTypography(),
  ],
})
