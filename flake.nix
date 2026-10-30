{
  description = "pytka.xyz personal page";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    nix-vite-plus = {
      url = "github:ryoppippi/nix-vite-plus";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    { nixpkgs, nix-vite-plus, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = forAllSystems (
        pkgs:
        let
          inherit (pkgs.stdenv.hostPlatform) isLinux isAarch64;
          workerdPkg = if isAarch64 then "workerd-linux-arm64" else "workerd-linux-64";

          # The Cloudflare adapter prerenders inside workerd, whose npm binary expects
          # a generic /lib64 loader. Run it through Nix's glibc loader instead.
          workerd = pkgs.writeShellScript "workerd" ''
            exec ${pkgs.stdenv.cc.bintools.dynamicLinker} \
              "$WORKERD_NPM_BIN" "$@"
          '';
        in
        {
          default = pkgs.mkShell {
            packages = [
              pkgs.nodejs_24
              # Global `vp`; inside the project it defers to the vite-plus devDependency.
              nix-vite-plus.packages.${pkgs.stdenv.hostPlatform.system}.vp
            ];

            shellHook = pkgs.lib.optionalString isLinux ''
              export WORKERD_NPM_BIN="$PWD/node_modules/@cloudflare/${workerdPkg}/bin/workerd"
              export MINIFLARE_WORKERD_PATH=${workerd}
            '';
          };
        }
      );

      formatter = forAllSystems (pkgs: pkgs.nixfmt);
    };
}
