import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  presetAttributify,
  presetTypography,
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
    presetAttributify(),
    presetUno(),
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
