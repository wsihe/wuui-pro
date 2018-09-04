<template lang="pug">
  div(:class="$style.home")
    el-row(:gutter="24")
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card
          span 高收益基金
          //i.el-icon-info
          //span 更多
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card
          span 优选稳健型基金
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card
          span 热门主题
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card
          span 高端理财
    el-row
      el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6")
        wu-card
          span 估值
      el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6")
        wu-card
          span 领涨
</template>

<script>
export default {
  name: 'home',
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
  .home
    display block

    :global
      .el-col
        margin-bottom 24px
</style>
