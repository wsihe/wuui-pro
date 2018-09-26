<template lang="pug">
  wu-layout(has-sider)
    wu-layout.sidebar-container(type="sider")
      wu-sider
    wu-layout.main-container(:class="{hasHideSider: !opened}")
      wu-layout(type="header")
        wu-header
      wu-layout(type="content")
        router-view(:key="$route.fullPath")
      wu-layout(type="footer")
        wu-footer
</template>

<script>
import { mapGetters } from 'vuex'
import wuLayout from './layout/layout'
import {wuFooter, wuHeader, wuSider} from './layout'
export default {
  name: 'home',
  components: {
    wuLayout,
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
    opened (val) {
      console.log(val)
    }
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
