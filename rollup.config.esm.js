import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: 'src/polyfill/CustomWebXRPolyfill.js',
  output: {
    file: './polyfill/webxr-polyfill.esm.js',
    format: 'es',
    name: 'CustomWebXRPolyfill.esm',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
    commonjs(),
    cleanup({
      comments: 'none',
    }),
  ],
};
