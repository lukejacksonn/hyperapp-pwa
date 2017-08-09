import buble from "rollup-plugin-buble"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"
import postcss from "rollup-plugin-postcss"
import nested from "postcss-nested"

export default {
  format: 'iife',
  plugins: [
    postcss({
      extract : true,
      plugins: [ nested() ],
    }),
    commonjs(),
    resolve({ jsnext: true }),
    buble({ jsx: "h" }),
    uglify(),
  ]
}
