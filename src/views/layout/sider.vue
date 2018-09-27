<template lang="pug">
  div(:class="$style.sidebar")
    el-scrollbar
      el-menu(
        @select="changeMenu",
        :default-active='$route.name',
        :collapse='!isCollapse',
        background-color="#001529",
        text-color="hsla(0,0%,100%,.65)",
        active-text-color="#108ee9",
        unique-opened)
        div(:class="[$style.logo, {[$style.collapseLogo]: !isCollapse}]")
          a
            img(src="~@/assets/logo.png")
            h1 Wuui Pro
        template(v-for="item in menus")
          el-menu-item(v-if="item.leaf", :index="item.path")
            i(:class="`el-icon-${item.icon}`")
            span(slot='title') {{item.name}}
          el-submenu(v-else, :index="item.icon", :key="item.icon")
            template(slot='title')
              i(:class="`el-icon-${item.icon}`")
              span(slot='title') {{item.name}}
            el-menu-item(
              :index="childMenu.path",
              v-for="(childMenu, index) in item.children",
              :key="childMenu.path") {{childMenu.name}}
</template>

<script>
import { mapGetters } from 'vuex'
import { getMenuData } from '@/router/menu'
import { getClientWidth } from '@/utils/dom'
export default {
  name: 'sider',
  components: {},
  props: {
  },
  data () {
    return {
      menus: []
    }
  },
  created () {
    this.menus = getMenuData()
  },
  mounted () {
    this.resizeSider()
    window.addEventListener('resize', this.resizeSider)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeSider)
  },
  computed: {
    ...mapGetters({
      isCollapse: 'opened'
    })
  },
  watch: {
  },
  methods: {
    changeMenu (active) {
      this.$router.push({name: active})
    },
    resizeSider () {
      requestAnimationFrame(() => {
        const winWidth = getClientWidth()
        if (winWidth < 993) {
          this.$store.commit('CLOSE_SIDER')
        } else {
          this.$store.commit('OPEN_SIDER')
        }
      })
    }
  }
}
</script>

<style lang="stylus" module>
  $logo-height  = 54px
  .sidebar
    width 100%

    :global
      .el-scrollbar
        position fixed
        top 0
        left 0
        bottom 0
        height 100%
        overflow hidden
        background #001529
        box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
        z-index 10
      .el-scrollbar__wrap
        overflow-x hidden !important
      .el-scrollbar__view
        height 100%
      .el-menu
        border-right none
        &:not(.el-menu--collapse)
          width 256px

    .logo
      position relative
      height $logo-height
      line-height $logo-height
      padding-left 22px
      transition all .28s
      background #002140
      overflow hidden
      img
        margin-top -3px
        display inline-block
        vertical-align middle
        height 32px
      h1
        color white
        display inline-block
        vertical-align middle
        font-size 20px
        margin 0 0 0 12px
        font-family 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif
        font-weight 600
    .collapseLogo
      padding-left 17px
</style>
