const $ = require('rollup-load-plugins')()
import nested from 'postcss-nested'

const prod = !process.env.ROLLUP_WATCH
const dev = !!process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: {
    file: 'static/index.js',
    sourcemap: dev ? 'inline' : false,
    format: 'iife'
  },
  plugins: [
    $.postcss({ plugins: [nested()] }),
    $.nodeResolve({ jsnext: true }),
    $.commonjs(),
    $.buble({ jsx: 'h' }),
    prod && $.uglify(),
    dev && $.livereload('static'),
    dev &&
      $.serve({
        contentBase: ['static'],
        historyApiFallback: true,
        port: 8080
      })
  ]
}
