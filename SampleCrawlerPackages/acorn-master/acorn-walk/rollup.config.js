import buble from "rollup-plugin-buble"

export default {
  entry: "acorn-walk/src/index.js",
  moduleName: "acorn.walk",
  plugins: [
    buble({transforms: {dangerousForOf: true}})
  ],
  sourceMap: true,
  targets: [
    {dest: "acorn-walk/dist/walk.js", format: "umd"},
    {dest: "acorn-walk/dist/walk.mjs", format: "es"}
  ]
}
