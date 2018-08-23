<template lang="pug">
  div(:class="$style.sider")
    div(:class="$style.logo")
      a
        img(src="~@/assets/logo.png")
        h1 Wuui Pro
</template>

<script>
export default {
  name: 'sider',
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
  },
  destroyed () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" module>
  @import "~@/styles/define.styl"

  .sider
    min-height 100vh
    box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
    position relative
    z-index 10
    &.ligth
      background-color white
      .logo
        background white
        h1
          color #002140
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
