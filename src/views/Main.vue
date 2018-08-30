<template lang="pug">
  layout(has-sider)
    layout(type="sider")
      wu-sider
    layout
      layout(type="header")
        wu-header
      layout(type="content")
        router-view(:key="$route.fullPath")
      layout(type="footer")
        wu-footer
</template>

<script>
import layout from './layout/layout'
import {wuFooter, wuHeader, wuSider} from './layout'
export default {
  name: 'home',
  components: {
    layout,
    wuSider,
    wuHeader,
    wuFooter
  }
}
</script>
