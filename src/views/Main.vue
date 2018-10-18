<template lang="pug">
  wu-layout(has-sider)
    wu-layout.sidebar-container(type="sider")
      wu-sider
    wu-layout.main-container(:class="{hasHideSider: !opened}")
      wu-layout(type="header")
        wu-header
      wu-layout(type="content" v-if="!isTab")
        .main-view
          page-header(v-if="!$route.meta.hideHeader")
          .main-view-content
            router-view(:key="$route.fullPath")

      // 页签模式
      wu-layout(type="content" v-if="isTab")
        .main-view
          wu-affix
            wu-tab-menu
          .main-view-content
            keep-alive(:include="cachedViews")
              router-view(:key="$route.fullPath")

      wu-layout(type="footer")
        wu-footer
</template>

<script>
import { mapGetters } from 'vuex'
import {
  wuLayout,
  wuFooter,
  wuHeader,
  wuSider,
  WuTabMenu,
  PageHeader
} from './layout'

export default {
  name: 'home',
  components: {
    wuLayout,
    wuFooter,
    wuHeader,
    wuSider,
    WuTabMenu,
    PageHeader
  },
  data () {
    return {
      // isShowTab: false
    }
  },
  mounted () {
    this.setBreadCrumb(this.$route)
  },
  computed: {
    ...mapGetters([
      'opened',
      'cachedViews'
    ])
  },
  watch: {
    '$route' (route) {
      this.setBreadCrumb(route)
    }
  },
  methods: {
    setBreadCrumb (route) {
      this.$store.commit('SET_BREADCRUMB', route)
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

    .main-view
      margin -24px -24px 0
    .main-view-content
      margin 24px 24px 0
</style>
