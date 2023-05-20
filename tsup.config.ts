import { defineConfig } from "tsup";

export default defineConfig(() => {
  return {
    entry: ["src/*.ts"],
    outDir: "lib",
    minify: true,
    clean: true,
    format: ["cjs", "esm"],
    dts: true,
  };
});
