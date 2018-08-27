<template lang="pug">
  div(:class="[$style.sider, {[$style.collapse]: isCollapse}]")
    div(:class="$style.logo", @click="openMenu")
      a
        img(src="~@/assets/logo.png")
        h1 Wuui Pro
    el-menu(
      default-active='1',
      :collapse='isCollapse',
      background-color="#001529",
      text-color="#fff",
      active-text-color="#108ee9",
      unique-opened)
      template(v-for="item in menus")
        el-menu-item(v-if="item.leaf", :index="item.path")
          i(:class="`el-icon-${item.icon}`")
          span(slot='title') {{item.name}}
        el-submenu(v-else, :index="item.icon", :key="item.icon")
          template(slot='title')
            i(:class="`el-icon-${item.icon}`")
            span(slot='title') {{item.name}}
          el-menu-item(:index="childMenu.path", v-for="(childMenu, index) in item.children",:key="childMenu.path") {{childMenu.name}}

</template>

<script>
import { getMenuData } from '@/router/menu'
export default {
  name: 'sider',
  components: {},
  props: {
  },
  data () {
    return {
      isCollapse: false,
      menus: []
    }
  },
  created () {
    this.menus = getMenuData()
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    openMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="stylus" module>
  @import "~@/styles/define.styl"

  .sider
    flex 0 0 256px
    max-width 256px
    min-width 256px
    width 256px
    min-height 100vh
    box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
    position relative
    transition all .3s cubic-bezier(0.645, 0.045, 0.355, 1)
    z-index 10
    &.ligth
      background-color white
      .logo
        background white
        h1
          color #002140
    :global
      .el-menu
        border none
        &:not(.el-menu--collapse)
          width 256px
  .collapse
    flex 0 0 80px
    max-width 80px
    min-width 80px
    width 80px

  .logo
    height 64px
    position relative
    line-height 64px
    padding-left $menu-collapsed-width - 40px
    transition all 0.3s
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
</style>
