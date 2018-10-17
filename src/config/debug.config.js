/**
 * 开发模式下的配置文件
 */
export default {
  env: 'dev', // 环境标示
  isDev: true, // 是否本地开发环境
  isTest: false, // 是否测试环境
  isRelease: false, // 是否线上环境
  mockApp: false, // 本地开发环境是否开启 mock
  isTab: false // 是否显示多页签，目前只在开发环境开放
}
