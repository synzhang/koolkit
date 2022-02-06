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
    output: {
      banner,
      file: pkg.main,
      format: "umd",
      name: pkg.name,
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
      file: pkg.module,
      format: "es",
      sourcemap: "inline"
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json"
      })
    ]
  }
]
