const path = require('path')
const fs = require('fs')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const env = process.env.NODE_ENV || 'development'

fs.writeFileSync(path.join(__dirname, './config/env.js'), `export default '${env}'`)

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/pro'
  : '/'

module.exports = {
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('config', resolve('config'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false
}