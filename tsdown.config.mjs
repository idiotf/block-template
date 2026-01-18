import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  format: 'umd',
  minify: true,
  outputOptions: {
    name: 'updateCategory',
    entryFileNames: 'index.js',
  },
})
