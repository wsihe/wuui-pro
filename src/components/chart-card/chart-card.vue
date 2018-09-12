<template lang="pug">
  div(:class="$style.chartCard")
    div(:class="$style.chartTop")
      div(:class="$style.metaWrap")
        div(:class="$style.meta")
          span
            slot(name="title") {{title}}
          span(:class="$style.action")
            slot(name="action") {{action}}
        div(:class="$style.total")
          slot(name="total") {{total}}
    div(:class="$style.content", :style="contentStyles")
      div(:class="$style.contentFixed")
        slot(name="content")
    div(:class="$style.footer")
      slot(name="footer")
</template>

<script>
export default {
  name: 'WuChartCard',
  components: {},
  props: {
    title: String,
    action: String,
    total: String,
    contentHeight: Number
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
    contentStyles () {
      return this.contentHeight ? {
        height: `${this.contentHeight}px`
      } : ''
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" module>
  .chartCard
    position relative

  .chartTop
    position relative
    overflow hidden
    width 100%

  .metaWrap
    float left

  .meta
    color rgba(0,0,0,.45)
    font-size 14px
    line-height 22px
    height 22px

  .action
    position absolute
    top 0
    right 0
    cursor pointer
    color #cccccc

  .total
    overflow hidden
    text-overflow ellipsis
    word-break break-all
    white-space nowrap
    color rgba(0,0,0,.85)
    margin-top 4px
    margin-bottom 0
    font-size 30px
    line-height 38px
    height 38px

  .content
    margin-bottom 12px
    position relative
    width 100%

  .contentFixed
    bottom 0
    left 0
    position absolute
    width 100%

  .footer
    border-top 1px solid #e8e8e8
    padding-top 9px
    margin-top 8px
    & > *
      position relative
</style>
