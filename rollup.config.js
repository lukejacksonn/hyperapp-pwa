import buble from "rollup-plugin-buble"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"
import scss from 'rollup-plugin-scss'

export default {
  format: 'iife',
  plugins: [
    scss(),
    buble({ jsx: "h" }),
    resolve({ jsnext: true }),
    uglify(),
  ]
}
