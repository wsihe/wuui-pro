<template lang="pug">
  div(:class="$style.home")
    el-row(:gutter="24")
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:class="$style.card", :loading="loading", :padding="0")
          wu-chart-card(title="总销售额", :content-height="46")
            template(slot="total") {{totalSales | yuan}}
            el-tooltip(slot="action", content="总销售额" placement="top")
              wu-icon(name="info", :scale="1.5")
            div(slot="content")
              el-row(:gutter="12")
                el-col(:span="12") 周同比 12%
                el-col(:span="12") 日同比 11%
            div(slot="footer")
              span(:class="$style.label") 日销售额
              span {{daySales | yuan}}
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:class="$style.card", :loading="loading", :padding="0")
          wu-chart-card(title="访问量", :content-height="46")
            template(slot="total") {{totalVisits | numFormat}}
            el-tooltip(slot="action", content="访问量" placement="top")
              wu-icon(name="info", :scale="1.5")
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
              wu-icon(name="info", :scale="1.5")
            div(:class="$style.chartContent", slot="content")
              wu-chart(:init-options="initCardOptions", :options="cardBarOptions")
            div(slot="footer")
              span(:class="$style.label") 本月成交
              span 210
      el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
        wu-card(:class="$style.card", :loading="loading", :padding="0")
          wu-chart-card(title="访问-付款转化率", :content-height="46")
            template(slot="total") 10%
            el-tooltip(slot="action", content="访问-付款转化率" placement="top")
              wu-icon(name="info", :scale="1.5")
            div(slot="content")
              el-row(:gutter="12")
                el-col(:span="12") 周同比 12%
                el-col(:span="12") 日同比 11%
            div(slot="footer")
              span(:class="$style.label") 日转化率
              span 11%
    wu-card(title="常用功能", :class="$style.commonArea")
      wu-card-grid(:class="$style.grid", v-for="item in tiles", :key="item.icon")
        wu-icon(:name="item.icon", :scale="2")
        span {{item.title}}
      wu-card-grid(:class="$style.grid")
        wu-icon(name="help", :scale="2")
        span 帮助
    wu-card(:loading="loading", :class="$style.salesArea", :padding="0")
      el-tabs(v-model="activeName")
        el-tab-pane(label="流量趋势" name="first" lazy)
          el-row
            el-col(:xs="24", :sm="12", :md="12", :lg="16", :xl="6")
              wu-chart(:init-options="initOptions", :options="barOptions")
            el-col(:xs="24", :sm="12", :md="12", :lg="8", :xl="6")
              div(:class="$style.salesRank")
                h4 商品访问量排名
                ul(:class="$style.rankingList")
                  li(v-for="(product, index) in rankListData")
                    span(:class="[$style.rankingItemNumber, {[$style.active]: index < 3 }]") {{index+1}}
                    span(:class="$style.rankingItemTitle") {{product.name}}
                    span {{product.total | numFormat}}
        el-tab-pane(label="销售量" name="second" lazy)
          el-row
            el-col(:xs="24", :sm="12", :md="12", :lg="16", :xl="6")
              wu-chart(:init-options="initOptions", :options="barOptions")
            el-col(:xs="24", :sm="12", :md="12", :lg="8", :xl="6")
              div(:class="$style.salesRank")
                h4 销量排名
                ul(:class="$style.rankingList")
                  li(v-for="(product, index) in rankListData")
                    span(:class="[$style.rankingItemNumber, {[$style.active]: index < 3  }]") {{index+1}}
                    span(:class="$style.rankingItemTitle") {{product.name}}
                    span {{product.total | numFormat}}
    wu-card(:loading="loading", :class="$style.indicatorArea")
      el-carousel(:autoplay="false" arrow="always")
        el-carousel-item(v-for="item in 2", :key="item")
          wu-chart-card(title="付款金额", :content-height="36")
            template(slot="total") {{totalSales | yuan}}
            div(slot="content")
              el-row(:gutter="12")
                el-col(:span="12") 周同比 12%
                el-col(:span="12") 日同比 11%
          wu-chart-card.active(title="客单价", :content-height="36")
            template(slot="total") {{totalSales | yuan}}
            div(slot="content")
              el-row(:gutter="12")
                el-col(:span="12") 周同比 12%
                el-col(:span="12") 日同比 11%
          wu-chart-card(title="付款订单数", :content-height="36")
            template(slot="total") 123
            div(slot="content")
              el-row(:gutter="12")
                el-col(:span="12") 周同比 12%
                el-col(:span="12") 日同比 11%
          wu-chart-card(title="付款人数", :content-height="36")
            template(slot="total") 231
            div(slot="content")
              el-row(:gutter="12")
                el-col(:span="12") 周同比 12%
                el-col(:span="12") 日同比 11%
      wu-chart(:init-options="initOptions", :options="options")
</template>

<script>
import tilesData from '../default/tiles'
import { getHomeData } from '@/services/home'
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
      initCardOptions: buildCardChart,
      cardOptions: {},
      cardBarOptions: {},
      initOptions: buildLineChart,
      options: {},
      barOptions: {},
      rankListData: [],

      totalSales: 12134,
      daySales: 324,
      totalVisits: 3243,
      dayVisits: 12,
      tiles: tilesData
    }
  },
  created () {
  },
  mounted () {
    this.initData()
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
    async initData () {
      try {
        let data = await getHomeData()
        const {visitData, salesData, visitData2, rankListData} = data
        this.rankListData = rankListData
        this.initCard(visitData)
        this.initSales(salesData)
        this.initIndicator(visitData2)
      } catch (e) {

      }
    },
    initCard (data) {
      const xAxis = data.map(item => item.x)
      const yAxis = data.map(item => item.y)
      this.cardOptions = {
        color: '#13c2c2',
        xAxis: {
          data: xAxis
        },
        series: [
          {
            name: '浏览量',
            type: 'line',
            data: yAxis,
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
          data: xAxis
        },
        series: [
          {
            name: '成交量',
            type: 'bar',
            data: yAxis
          }
        ]
      }
    },
    initSales (data) {
      const xAxis = data.map(item => item.x)
      const yAxis = data.map(item => item.y)
      this.barOptions = {
        legend: {
          show: false
        },
        xAxis: {
          data: xAxis
        },
        series: [
          {
            name: '销售量',
            type: 'bar',
            data: yAxis
          }
        ]
      }
    },
    initIndicator (data) {
      const xAxis = data.map(item => item.x)
      const yAxis1 = data.map(item => item.y)
      const yAxis2 = data.map(item => item.y2)
      this.options = {
        legend: {
          data: ['浏览量', '访客数']
        },
        xAxis: {
          data: xAxis
        },
        series: [
          {
            name: '浏览量',
            type: 'line',
            data: yAxis1
          },
          {
            name: '访客数',
            type: 'line',
            data: yAxis2
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" module>
  @import "~@/styles/define.styl"
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
        display flex
        align-items center
        justify-content center
        width 25%
        cursor pointer
        span
          margin-left 8px

    .salesRank
      padding 0 32px 32px 72px

      .rankingList
        margin 25px 0 0
        padding 0
        list-style none
        li
          clearfix()
          margin-top 16px
          display flex
          align-items center
          span
            color $text-color
            font-size 14px
            line-height 22px

          .rankingItemNumber
            background-color #f5f5f5
            border-radius 20px
            display inline-block
            font-size 12px
            font-weight 600
            margin-right 16px
            height 20px
            line-height 20px
            width 20px
            text-align center
            margin-top 1.5px
            &.active
              background-color #314659
              color #fff

          .rankingItemTitle
            flex 1
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            margin-right 8px

    .indicatorArea

      :global
        .wu-chart-card
          display inline-block
          width 25%
          padding 20px 20px 8px
          border 1px solid #e1e1e1
          cursor pointer
          border-left none
          &:first-child
            border-left 1px solid #e1e1e1
          &.active
            border 1px solid #e1f3d8
        .el-carousel__container
          height 145px
          margin-bottom 24px

</style>
