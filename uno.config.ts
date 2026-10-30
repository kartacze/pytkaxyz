import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetAttributify,
  presetTypography,
  presetWind4,
} from 'unocss'

export default defineConfig({
  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) {
          return {
            color: theme.colors[c],
          }
        }
      },
    ],
  ],
  theme: {
    colors: {
      primary: 'var(--brown)',
      brown: 'var(--brown)',
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
        mono: ['IBM Plex Mono', 'IBM Plex Mono:300,400'],
      },
    }),
    presetTypography(),
  ],
})
