<template lang="pug">
  div(:class="[cls, siderCls]")
    slot
</template>

<script>
export default {
  name: 'wuLayout',
  props: {
    type: {
      type: String,
      default: 'layout'
    },
    hasSider: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
    cls () {
      let cls = 'wu-layout'
      switch (this.type) {
        case 'sider' :
          cls = 'wu-layout-sider'
          break
        case 'header' :
          cls = 'wu-layout-header'
          break
        case 'content' :
          cls = 'wu-layout-content'
          break
        case 'footer' :
          cls = 'wu-layout-footer'
          break
      }
      return cls
    },
    siderCls () {
      return this.hasSider ? 'wu-layout-has-sider' : ''
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  @import "~@/styles/define.styl"

  .wu-layout
    min-height 100vh
    overflow-x hidden
    display flex
    flex-direction column
    flex auto
    background $layout-body-background

    &-has-sider
      flex-direction row
      > .wu-layout,
      > .wu-layout-content
        overflow-x hidden

    &-header,
    &-footer
      flex 0 0 auto

    &-header
      background $layout-header-background
      padding $layout-header-padding
      height $layout-header-height
      line-height $layout-header-height

    &-footer
      padding $layout-footer-padding
      color $text-color
      font-size $font-size-base

    &-content
      margin 24px 24px 0px
      height 100%
      flex auto

    &-sider
      transition all .15s cubic-bezier(0.645, 0.045, 0.355, 1)
      position relative
      background $layout-sider-background

      &-has-trigger
        padding-bottom $layout-trigger-height

      &-right
        order 1

      &-trigger
        position fixed
        text-align center
        bottom 0
        cursor pointer
        height $layout-trigger-height
        line-height $layout-trigger-height
        color $layout-trigger-color
        // background fade($layout-trigger-background, 100)
        z-index 1
        transition all .15s cubic-bezier(0.645, 0.045, 0.355, 1)
</style>
