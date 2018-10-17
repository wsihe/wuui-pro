import config from '../config/index'
/**
 * 定义全局混合，注入全局判断方法。！
 * 只限于那些页面通用的简单属性和方法。
 */

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
