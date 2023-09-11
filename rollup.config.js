import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [commonjs()],
  },
  {
    input: './src/index.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'jsnes',
      sourcemap: true,
    },
    plugins: [commonjs()],
  },
];
