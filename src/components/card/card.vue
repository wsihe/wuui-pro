<template lang="pug">
  div(:class="[$style.card, {[$style.loading]: loading}]")
    div(:class="$style.head" v-if="!!title || !!extra || $slots.title || $slots.extra")
      div(:class="$style.wrapper")
        slot(name="title")
          div(:class="$style.title") {{title}}
        slot(name="extra")
          div(:class="$style.extra") {{extra}}
    div(:class="$style.body")
      div(:class="$style.loadingContent", v-if="loading")
        el-row(:gutter="8", v-for="(item, index) in loadingGird", :key="index")
          el-col(:span="children", v-for="(children, key) in item", :key="key")
            div(:class="$style.loadingBlock")
      slot(v-if="!loading")
</template>

<script>
// loading 列表
const LOADING_GIRD = [
  [22],
  [8, 15],
  [6, 18],
  [13, 9],
  [4, 3, 16],
  [8, 6, 8]
]
export default {
  name: 'WuCard',
  components: {},
  props: {
    title: String,
    extra: String,
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loadingGird: LOADING_GIRD
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

  .card
    font-family "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size 14px
    font-variant tabular-nums
    line-height 1.5
    color rgba(0, 0, 0, 0.65)
    -webkit-box-sizing border-box
    box-sizing border-box
    margin 0
    padding 0
    list-style none
    background #fff
    border-radius 2px
    position relative
    transition all .3s

    :global
      .el-col
        margin-bottom 0 !important

  .hoverable
    cursor pointer
    &:hover
      box-shadow 0 2px 8px rgba(0, 0, 0, .09)
      border-color rgba(0, 0, 0, 0.09)

  .bordered
    border 1px solid #e8e8e8

  .head
    background transparent
    border-bottom 1px solid #e8e8e8
    padding 0 24px
    border-radius 2px 2px 0 0
    min-height 48px

  .wrapper
    display flex

  .title
    font-size 16px
    padding 16px 0
    text-overflow ellipsis
    overflow hidden
    white-space nowrap
    color alpha(#000, 85%)
    font-weight 500
    display inline-block
    flex 1

  .extra
    float right
    padding 17.5px 0
    text-align right
    margin-left auto

  .body
    padding 24px

  .loading .body
    user-select none

  .containGrid:not(.loading) .body
    margin -1px 0 0 -1px
    padding 0

  .loadingContent
    p
      margin 0

  .loadingBlock
    height 14px
    margin 4px 0
    border-radius 2px
    background linear-gradient(90deg, rgba(207, 216, 220, .2), rgba(207, 216, 220, .4), rgba(207, 216, 220, .2))
    animation card-loading 1.4s ease infinite
    background-size 600% 600%

  @keyframes card-loading
    0%,
    100%
      background-position 0 50%
    50%
      background-position 100% 50%

</style>
