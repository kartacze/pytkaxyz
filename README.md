# pytkaxyz personal page

## Development

Tooling comes from the Nix flake (`direnv allow`, or `nix develop`), which
provides Node 24 and the `vp` CLI from
[nix-vite-plus](https://github.com/ryoppippi/nix-vite-plus).

```sh
npm install
npm run dev     # astro dev
npm run build   # astro check && astro build
npm run check   # vp check (oxfmt + oxlint), prettier for .astro, astro check
npm run fmt     # vp fmt + prettier for .astro
```

[Vite+](https://viteplus.dev) is also installed as a devDependency (the global
`vp` defers to it, and `vite.config.ts` imports from it), and `vite` is
overridden to `@voidzero-dev/vite-plus-core`, so Astro builds on Vite+. Use the
npm scripts (or `vpr <script>`) for dev and build: `vp dev` / `vp build` run
plain Vite, not Astro. Oxfmt doesn't handle `.astro` files yet, so Prettier
still formats those.
