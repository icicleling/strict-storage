import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/lib/index.js",
      format: "cjs",
    },
    {
      file: "dist/es/index.js",
      format: "es",
    },
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    del({ targets: "dist/*" }),
  ],
};
