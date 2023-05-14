import { defineConfig, type Options } from "tsup";

export default defineConfig(() => {
  const buildOptions: Options = {
    minify: true,
    clean: true,
    format: ["cjs", "esm"],
    dts: true,
  };

  return {
    entry: ["src/ttc.ts"],
    outDir: "lib",
    ...buildOptions,
  };
});
