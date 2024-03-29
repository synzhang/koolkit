import { terser } from "rollup-plugin-terser"
import typescript from "@rollup/plugin-typescript"
import pkg from "./package.json"

const author = pkg.author
const moduleName = pkg.name.replace(/^@.*\//, "")
const inputFileName = "src/index.ts"
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`

export default [
  {
    input: inputFileName,
    output: [
      {
        banner,
        file: pkg.browser,
        format: "iife",
        name: pkg.name,
        sourcemap: "inline"
      },
      {
        banner,
        file: `${pkg.browser}.min.js`,
        format: "iife",
        name: pkg.name,
        sourcemap: "inline",
        plugins: [terser()]
      }
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json"
      })
    ]
  },
  {
    input: inputFileName,
    output: {
      banner,
      file: pkg.module,
      format: "es",
      sourcemap: "inline"
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json"
      })
    ]
  },
  {
    input: inputFileName,
    output: {
      banner,
      file: pkg.main,
      format: "cjs",
      sourcemap: "inline"
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json"
      })
    ]
  }
]
