import debugConfig from './debug.config'
import testConfig from './test.config'
import releaseConfig from './release.config'

const configMaps = {
  'localhost': debugConfig,
  'wuui.top': testConfig,
  'release': releaseConfig
}
// 非测试环境使用生产的配置
const config = (() => {
  const hostname = location.hostname || 'localhost'
  return configMaps[hostname] || configMaps.release
})()

export default config
