<template lang="pug">
  div(:class="$style.order")
    wu-card
      el-row
        el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
          div(:class="$style.info")
            span 待付款
            p 8
            em
        el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
          div(:class="$style.info")
            span 待发货订单
            p 8
            em
        el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
          div(:class="$style.info")
            span 7天下单笔数
            p 32
            em
        el-col(:xs="24", :sm="12", :md="12", :lg="6", :xl="6")
          div(:class="$style.info")
            span 本周收入
            p ¥ 112
    wu-card(:class="$style.orderTrend" title="7天订单趋势")
      el-row(:gutter="24")
        el-col(:xs="24", :sm="12", :md="12", :lg="16", :xl="6")
          wu-chart(:init-options="initOptions", :options="options")
        el-col(:xs="24", :sm="12", :md="12", :lg="8", :xl="6")
          wu-card
            div(:class="$style.info")
              span 昨天下单笔数
              p 8
          wu-card
            div(:class="$style.info")
              span 昨日付款笔数
              p 112
    el-row(:gutter="24")
      el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="12")
        wu-card(title="7天订单商品排行")
          el-table(:data='tableData', tooltip-effect='dark')
            el-table-column(label='日期', width='120')
              template(slot-scope='scope') {{ scope.row.date }}
            el-table-column(prop='name', label='姓名', width='120')
            el-table-column(prop='address', label='地址')
          wu-pagination
      el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="12")
        wu-card(title="7天订单分布")
          wu-chart(:init-options="initPieOptions", :options="pieOptions")

</template>

<script>
import { buildLineChart, buildPieChart } from '@/utils/chartHelper'
export default {
  name: 'BasicList',
  components: {},
  props: {
  },
  data () {
    return {
      initOptions: buildLineChart,
      initPieOptions: buildPieChart,
      options: {},
      pieOptions: {},
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1518 弄'
      }],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  },
  created () {
  },
  mounted () {
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
    this.pieOptions = {
      title: {
        text: '订单总额',
        subtext: '¥ 13'
      },
      legend: {
        orient: 'vertical',
        top: 'middle',
        left: '65%',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          data: this.pieData
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
  .order
    display block

    .info
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

    .orderTrend
      :global(.wu-card)
        border 1px solid #ededed
        background #fafafa
        &:first-child
          margin-top 24px

    :global(.wu-card)
      margin-bottom 24px
</style>
