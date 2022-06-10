import * as path from 'path'
import json from '@rollup/plugin-json'
import resolvePlugin from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
const packagesDir = path.resolve(__dirname, 'packages')

const packageDir = path.resolve(packagesDir, process.env.TARGET)

const resolve = p => path.resolve(packageDir, p)

const pkg = require(resolve('package.json'))

const name = path.basename(packageDir)

const outputConfig = {
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: 'es'
  },
  'cjs': {
    file: resolve(`dist/${name}.cjs.js`),
    format: 'cjs'
  },
  'global': {
    file: resolve(`dist/${name}.global.js`),
    format: 'iife' // 立即执行函数
  }
}

const options = pkg.buildOptions // 再package.json中自定义的选项

function createConfig(format, output) {
  output.name = options.name
  // output.sourcemap = true

  return {
    input: resolve(`src/index.ts`),
    output,
    plugins: [
      json(),
      ts({
        tsconfig: path.resolve(__dirname, 'tsconfig.json')
      }),
      resolvePlugin()
    ]
  }
}

const dtsCofig = {
  input: resolve('src/index.ts'),
  output: {
    file: resolve(`${pkg.typings}`),
    format: 'es'
  },
  plugins: [dts()]
}


// roll up 需要导出配置
export default [...options.formats.map(format => createConfig(format, outputConfig[format])), dtsCofig]