import * as vite from 'vite'
import * as rollup from 'rollup'
import * as webpack from 'webpack'
import * as esbuild from 'esbuild'

export const viteBuild = vite.build
export const rollupBuild = rollup.rollup
export const esbuildBuild = esbuild.build
export const webpackBuild = (webpack.webpack || (webpack as any).default || webpack) as typeof webpack.webpack

export const build = {
  webpack: webpackBuild,
  rollup: rollupBuild,
  vite: viteBuild,
  esbuild: esbuildBuild
}
