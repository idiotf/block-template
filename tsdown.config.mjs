import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  minify: true,
  outputOptions: {
    entryFileNames: 'index.js',
  },
})
