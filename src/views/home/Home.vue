<template lang="pug">
  div(:class="$style.home")
    el-row(:gutter="24")
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:loading="loading")
          span 待发货订单
          //i.el-icon-info
          //span 更多
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:loading="loading")
          span 昨日订单
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:loading="loading")
          span 昨日交易额
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:loading="loading")
          span 可提现余额
    wu-card(:loading="loading", :class="$style.salesArea")
      el-row
        el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 销售量
        el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 访问量
    wu-card(title="常用功能")
      el-row
        el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 作业
        el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 昨天

</template>

<script>
export default {
  name: 'home',
  components: {},
  props: {
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 600)
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

    .salesArea
      margin-bottom 24px
</style>
