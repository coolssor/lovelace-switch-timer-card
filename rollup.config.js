import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: ['src/switch-timer-card.js'],
  output: {
    file: 'switch-timer-card.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
