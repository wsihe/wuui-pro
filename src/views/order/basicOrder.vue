<template lang="pug">
  div(:class="$style.order")
    wu-card
      el-row
        el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
          div(:class="$style.headerInfo")
            span 待发货订单
            p 8个
            em
        el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
          div(:class="$style.headerInfo")
            span 本周订单平均处理时间
            p 32分钟
            em
        el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
          div(:class="$style.headerInfo")
            span 本周完成订单数
            p 28个
    wu-card(:class="$style.content")

</template>

<script>
export default {
  name: 'BasicList',
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
  .order
    display block

    .headerInfo
      position relative
      text-align center
      & > span
        color #999
        display inline-block
        font-size 14px
        line-height 22px
        margin-bottom 4px
      & > p
        color #333
        font-size 24px
        line-height 32px
        margin 0
      & > em
        background-color #ededed
        position absolute
        height 56px
        width 1px
        top 0
        right 0

    .content
      margin-top 24px
</style>
