import debugConfig from './debug.config'
import testConfig from './test.config'
import releaseConfig from './/release.config'

const configMaps = {
  'localhost': debugConfig,
  'wuui.top': testConfig,
  'release': releaseConfig
}
const config = (() => {
  const hostname = location.hostname || 'localhost'
  return configMaps[hostname]
})()

export default config
