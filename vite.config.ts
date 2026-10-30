// Vite+ tooling config (lint, fmt, check). Astro itself is configured in
// astro.config.mjs and does not read this file.
import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    ignorePatterns: ['dist/**', '.astro/**', 'worker-configuration.d.ts'],
  },
  fmt: {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    ignorePatterns: ['dist/**', '.astro/**', 'worker-configuration.d.ts'],
  },
})
