<template lang="pug">
  div(:class="$style.order")
    wu-card(title="订单列表")
      div(slot="extra")
        el-radio-group(v-model='status')
          el-radio-button(label='') 全部
          el-radio-button(label='0') 待付款
          el-radio-button(label='1') 待发货
          el-radio-button(label='2') 已发货
          el-radio-button(label='3') 已完成
          el-radio-button(label='4') 已关闭
        span(:class="$style.extraSearch")
          el-input(placeholder='商品名称/商品编号/订单号', v-model='name')
            template(slot="append")
              el-button(icon="el-icon-search")
              el-button
                span 高级
                i.el-icon-arrow-down
      div(v-loading="loading")
        table(:class="$style.table")
          thead
            tr
              th
                div(:class="$style.orderTitle")
                  span 近三个月订单
                  span 订单详情
              th 客户
              th 金额
              th 状态
              th 操作
          tbody
            template(v-for="order in orderList")
              tr(:class="$style.step")
                td(colspan="5")
              tr(:class="$style.trTh")
                td(colspan="5")
                  div(:class="$style.orderTop")
                    span {{order.updatedAt | dateConvert}}
                    span(:class="$style.label") 订单号：
                    a(:class="$style.value") {{order.key}}
              template(v-for="(product, index) in order.productList")
                tr(:class="$style.trBd")
                  td
                    div(:class="$style.product")
                      div(:class="$style.avatar")
                        img(src="~@/assets/avatar.jpg")
                        span {{product.name}}
                      span x {{product.num}}
                  template(v-if="index === 0")
                    td(:rowspan="order.total") {{order.customer}}
                    td(:rowspan="order.total") 总额：{{order.price | yuan}}
                    td(:rowspan="order.total") {{order.status | orderStatus}}
                    td(:rowspan="order.total") 处理
            tr(:class="$style.trBd", v-if="!orderList.length")
              td(colspan="6")
                div 暂无相关订单
        wu-pagination(:api="apiMethod", @list="queryOrderList", :params="params")
</template>

<script>
import { queryOrders } from '@/services/order'
export default {
  components: {},
  props: {
  },
  data () {
    return {
      status: '',
      name: '',
      loading: true,
      params: {},
      apiMethod: queryOrders,
      orderList: []
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
    status () {
      this.handleSearch()
    }
  },
  methods: {
    handleSearch () {
      this.loading = true
      this.params = {
        status: this.status,
        name: this.name
      }
    },
    queryOrderList (data) {
      this.orderList = data.list
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" module>
  .order
    display block

    .content
      margin-top 24px

    .extraSearch
      display inline-block
      width 272px
      margin-left 16px

      :global
        .el-button
          border-right 1px solid #dcdfe6
          border-radius 0 !important
          &:last-child
            padding-left 20px
            padding-right 8px
            border none

    :global(.el-loading-mask)
      top 32px

    .table
      width 100%
      border-collapse collapse
      thead th
        box-sizing border-box
        height 32px
        line-height 32px
        font-size 12px
        font-weight normal
        text-align center
        background #f5f5f5
        color #606266
      tbody tr
        vertical-align top
        &.step
          height 20px
          td
            border 0
        &.trTh
          height 31px
          line-height 31px
          color #aaa
          background #f5f5f5
          td
            border-bottom-color #f5f5f5
        &.trBd
          text-align center
          td
            padding 14px 0
      tbody td
        font-size 12px
        border 1px solid #e5e5e5

      .orderTitle
        display flex
        margin 0 20px
        span
          text-align left
          width 50%

      .orderTop
        padding-left 20px
        .label
          margin-left 10px
        .value
          color #333
          cursor pointer

      .product
        margin 0 20px
        display flex
        justify-content space-between
        align-items center
        .avatar
          flex 1 1
          display flex
          align-items center
        & > span
          margin-left 10px
          flex 0 0 auto
        img
          margin-right 10px
          width 30px
          height 30px
          border-radius 4px
          overflow hidden
</style>
