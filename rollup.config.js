import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";


export default {
  input: "lib/index.ts",
  preserveModules: true,
  output: [
    {
      dir: "bundle",
      format: "cjs",
      sourcemap: true
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      module: true,
    }),
    babel({
      include: ["lib/**"],
      exclude: ['node_modules/**', 'src/stories/'],
      presets: ['@babel/preset-react'],
    }),
    copy({
      targets: [
        {
          src: "lib/assets/fonts/*",
          dest: "bundle/lib/assets/fonts",
        }
      ]
    })
  ]
};