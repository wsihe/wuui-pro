<template lang="pug">
  layout(has-sider)
    layout.sidebar-container(type="sider")
      wu-sider
    layout.main-container(:class="{hasHideSider: !opened}")
      layout(type="header")
        wu-header
      layout(type="content")
        router-view(:key="$route.fullPath")
      layout(type="footer")
        wu-footer
</template>

<script>
import { mapGetters } from 'vuex'
import layout from './layout/layout'
import {wuFooter, wuHeader, wuSider} from './layout'
export default {
  name: 'home',
  components: {
    layout,
    wuSider,
    wuHeader,
    wuFooter
  },
  computed: {
    ...mapGetters([
      'opened'
    ])
  },
  watch: {
  }
}
</script>
<style lang="stylus">
  .main-container
    margin-left 256px
    min-height 100%
    position relative
    transition margin-left .28s
    &.hasHideSider
      margin-left 64px
</style>
