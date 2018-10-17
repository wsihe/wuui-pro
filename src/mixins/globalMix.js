import debugConfig from '../config/debug.config'
import testConfig from '../config/test.config'
import releaseConfig from '../config/release.config'

/**
 * 定义全局混合，注入全局判断方法。！
 * 只限于那些页面通用的简单属性和方法。
 */

const configMaps = {
  'localhost': debugConfig,
  'wuui.top': testConfig,
  'release': releaseConfig
}
const config = (() => {
  const hostname = location.hostname || 'localhost'
  return configMaps[hostname]
})()

export default {
  data: function () {
    return {
      isRelease: config.isRelease,
      isTest: config.isTest,
      isDev: config.isDev,
      isTab: config.isTab,
      env: config.env
    }
  },
  methods: {
  }
}
