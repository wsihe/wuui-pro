<template lang="pug">
  wu-layout(has-sider)
    wu-layout.sidebar-container(type="sider")
      wu-sider
    wu-layout.main-container(:class="{hasHideSider: !opened}")
      wu-layout(type="header")
        wu-header
      wu-layout(type="content" v-if="!isTab")
        router-view(:key="$route.fullPath")

      // 页签模式
      wu-layout(type="content" v-if="isTab")
        .main-tab-container
          wu-affix
            wu-tab-menu
          .main-tab-content
            keep-alive(:include="cachedViews")
              router-view(:key="$route.fullPath")

      wu-layout(type="footer")
        wu-footer
</template>

<script>
import { mapGetters } from 'vuex'
import wuLayout from './layout/layout'
import {wuFooter, wuHeader, wuSider} from './layout'
import WuTabMenu from './layout/tabMenu'
export default {
  name: 'home',
  components: {
    WuTabMenu,
    wuLayout,
    wuSider,
    wuHeader,
    wuFooter
  },
  data () {
    return {
      // isShowTab: false
    }
  },
  computed: {
    ...mapGetters([
      'opened',
      'cachedViews'
    ])
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

    .main-tab-container
      margin -24px -24px 0
    .main-tab-content
      margin 24px 24px 0
</style>
