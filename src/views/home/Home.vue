<template lang="pug">
  div(:class="$style.home")
    el-row(:gutter="24")
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:class="$style.card", :loading="loading", :padding="0")
          wu-chart-card(title="总销售额", :content-height="46")
            template(slot="total") {{totalSales | yuan}}
            el-tooltip(slot="action", content="总销售额" placement="top")
              i.el-icon-info
            div(slot="content")
               span 周同比 12%
               span 日同比 11%
            div(slot="footer")
              span(:class="$style.label") 日销售额
              span {{daySales | yuan}}
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:class="$style.card", :loading="loading", :padding="0")
          wu-chart-card(title="访问量", :content-height="46")
            template(slot="total") {{totalVisits | numFormat}}
            el-tooltip(slot="action", content="访问量" placement="top")
              i.el-icon-info
            div(:class="$style.chartContent", slot="content")
              wu-chart(:init-options="initCardOptions", :options="cardOptions")
            div(slot="footer")
              span(:class="$style.label") 日访问量
              span {{dayVisits | numFormat}}
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:class="$style.card", :loading="loading", :padding="0")
          wu-chart-card(title="成交量", :content-height="46")
            template(slot="total") {{totalSales | numFormat}}
            el-tooltip(slot="action", content="日成交量" placement="top")
              i.el-icon-info
            div(:class="$style.chartContent", slot="content")
              wu-chart(:init-options="initCardOptions", :options="cardBarOptions")
            div(slot="footer")
              span(:class="$style.label") 转化率
              span 10%
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:class="$style.card", :loading="loading", :padding="0")
          wu-chart-card(title="待发货订单", :content-height="46")
            template(slot="total") {{totalSales | numFormat}}
            el-tooltip(slot="action", content="待发货订单" placement="top")
              i.el-icon-info
            div(slot="content")
            div(slot="footer")
              span(:class="$style.label") 昨日订单
              span {{daySales | numFormat}}
    wu-card(title="常用功能", :class="$style.commonArea")
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 订单处理
      wu-card-grid(:class="$style.grid") 数据分析
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") 发布商品
      wu-card-grid(:class="$style.grid") ...
    wu-card(:loading="loading", :class="$style.salesArea", :padding="0")
      el-tabs(v-model="activeName")
        el-tab-pane(label="流量趋势" name="first" lazy)
          wu-chart(:init-options="initOptions", :options="options")
        el-tab-pane(label="销售量" name="second" lazy)
          wu-chart(:init-options="initOptions", :options="barOptions")
          <!--el-row-->
            <!--el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 访问量-->
            <!--el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="6") 7日访问排名-->
</template>

<script>
import { buildLineChart, buildCardChart } from '@/utils/chartHelper'
export default {
  name: 'home',
  components: {},
  props: {
  },
  data () {
    return {
      loading: true,
      activeName: 'first',
      initCardOptions: {},
      cardOptions: {},
      cardBarOptions: {},
      initOptions: {},
      options: {},
      barOptions: {},

      totalSales: 12134,
      daySales: 324,
      totalVisits: 3243,
      dayVisits: 12
    }
  },
  created () {
    this.initOptions = buildLineChart
    this.initCardOptions = buildCardChart
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 600)
    this.cardOptions = {
      color: '#13c2c2',
      xAxis: {
        data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07']
      },
      series: [
        {
          name: '浏览量',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210],
          symbolSize: '0',
          smooth: true,
          areaStyle: {}
        }
      ]
    }
    this.cardBarOptions = {
      grid: {
        left: '0',
        right: '0'
      },
      xAxis: {
        data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07']
      },
      series: [
        {
          name: '成交量',
          type: 'bar',
          data: [120, 132, 101, 134, 90, 230, 210]
        }
      ]
    },
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
    this.barOptions = {
      legend: {
        show: false
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '销售量',
          type: 'bar',
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

    .card
      padding 20px 24px 8px

    .chartContent
      width 100%

      :global
        .wu-echarts
          height 46px

    .label
      margin-right 10px

    .salesArea
      min-height 80px
      margin-bottom 24px

    .commonArea
      padding-bottom 24px
      margin-bottom 24px
      clearfix()

    .grid
      width 25%
      text-align center
      cursor pointer

</style>
