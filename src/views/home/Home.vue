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
    wu-card(:loading="loading", :class="$style.salesArea", :padding="0")
      el-tabs(v-model="activeName")
        el-tab-pane(label="流量趋势" name="first")
          wu-chart(:init-options="initOptions", :options="options")
        el-tab-pane(label="销售量" name="second")
          el-row
            el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 访问量
            el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 7日访问排名
    wu-card(title="常用功能", :class="$style.commonArea")
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 订单处理
      wu-card-grid(:class="$style.grid") 数据分析
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") ...
</template>

<script>
import { buildLineChart } from '@/utils/chartHelper'
export default {
  name: 'home',
  components: {},
  props: {
  },
  data () {
    return {
      loading: true,
      activeName: 'first',
      initOptions: {},
      options: {}
    }
  },
  created () {
    this.initOptions = buildLineChart
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 600)
    this.options = {
      legend: {
        data: ['浏览量', '访客数']
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '浏览量',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '访客数',
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    }
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
  @import "~@/styles/clearfix.styl"

  .home
    display block

    :global
      .el-col
        margin-bottom 24px
      .el-tabs__nav
        margin-left 24px
      .el-tabs__item
        font-weight normal
      .el-tab-pane
        padding 0 24px 24px

    .salesArea
      min-height 80px
      margin-bottom 24px

    .commonArea
      padding-bottom 24px
      clearfix()

    .grid
      width 25%
      text-align center
      cursor pointer
</style>
