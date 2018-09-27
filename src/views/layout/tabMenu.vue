<template lang="pug">
  div(:class="$style.tabMenu")
    router-link(
      :class="[$style.tabItem, {[$style.active]: isActive(tab)}]",
      v-for="tab in visitedViews",
      :to="tab",
      :key="tab.path") {{ tab.title }}
      i.el-icon-close(@click.prevent.stop="closeTab(tab)")
</template>

<script>
import { mapGetters } from 'vuex'

function generateRoute (route) {
  if (route.name) {
    return route
  }
  return false
}

export default {
  name: 'WuTabMenu',
  components: {},
  props: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.addViewTabs()
  },
  destroyed () {
  },
  computed: {
    ...mapGetters([
      'visitedViews'
    ])
  },
  watch: {
    $route () {
      this.addViewTabs()
    }
  },
  methods: {
    isActive (route) {
      return route.path === this.$route.path
    },
    addViewTabs () {
      const route = generateRoute(this.$route)
      if (!route) {
        return false
      }
      this.$store.dispatch('addView', route)
    },
    closeTab (tab) {
      this.$store.dispatch('delView', tab).then(({ visitedViews }) => {
        if (this.isActive(tab)) {
          const latestView = visitedViews.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView)
          } else {
            this.$router.push('/')
          }
        }
      })
    }
  }
}
</script>

<style lang="stylus" module>
  $tab-height       = 35px
  $item-active-color   = #69c0ff
  $item-hover-color    = #e6f7ff
  $item-color       = alpha(#000, 45%)
  $border-color     = #d9d9d9

  .tabMenu
    display flex
    align-items center
    padding-left 24px
    width 100%
    height $tab-height
    background #fff
    border-bottom solid 1px #d1d5da
    box-shadow 0 1px 2px rgba(0,0,0,0.075)
    .tabItem
      position relative
      width 150px
      height 22px
      padding 0 20px
      color $item-color
      text-decoration none
      &:before
        position absolute
        top 2px
        left 0
        display block
        content ''
        width 1px
        height 18px
        opacity 1
        transition opacity 0.8s
        background $border-color
      &:first-child:before
        opacity 0
      &:first-child:before
        opacity 0

      &:hover
        background $item-hover-color
        & + .tabItem:before
        &:before
          opacity 0

      &.active
        border-radius 2px
        background $item-active-color
        color #fff
        & + .tabItem:before
        &:before
          opacity 0
        &:hover
          background $item-active-color
          :global(.el-icon-close:hover)
            background #91d5ff

    :global(.el-icon-close)
      position absolute
      top 3px
      right 8px
      padding 1px
      border-radius 50%
      text-align center
      transform-origin 100% 50%
      &:hover
        background-color #f3f8fc
</style>
