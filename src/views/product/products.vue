<template lang="pug">
  div(:class="$style.product")
    wu-card
      el-form(:model='formInline', :inline="true")
        el-row(:gutter="48")
          el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
            el-form-item(label='商品名称')
              el-input(v-model='formInline.name', placeholder='请输入商品名称/代码')
          el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
            el-form-item(label='商品类型')
              el-select(v-model='formInline.type', placeholder='请选择商品类型')
                el-option(label='全部', value='')
                el-option(label='类型一', value='1')
                el-option(label='类型二', value='2')
          template(v-if="showMore")
            el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
              el-form-item(label='商品分组')
                el-select(v-model='formInline.group', placeholder='请选择商品分组')
                  el-option(label='全部', value='')
                  el-option(label='分组一', value='2')
                  el-option(label='分组二', value='3')
            el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
              el-form-item(label='价格')
                el-row
                  el-col(:span="11")
                    el-input(v-model='formInline.user')
                  el-col(:class="$style.line", :span="2") -
                  el-col(:span="11")
                    el-input(v-model='formInline.user')
            el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
              el-form-item(label='总销量')
                el-row
                  el-col(:span="11")
                    el-input(v-model='formInline.user')
                  el-col(:class="$style.line", :span="2") -
                  el-col(:span="11")
                    el-input(v-model='formInline.user')
          el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
            el-form-item
              el-button(type='primary', @click='onSubmit') 查询
              el-button(@click='onSubmit') 重置
              el-button(type="text", @click='toggleShowMore')
                span 展开
                i(:class="`el-icon-arrow-${iconType}`")
      el-button(icon="el-icon-plus", type='primary', @click='') 添加商品
      template(v-if="selection.length > 0")
        el-button(@click='') 批量删除
        el-button(@click='') 批量导出
      el-alert(:class="$style.info", type="info", show-icon, :closable="false", :title="`已选择 ${selection.length} 项`")
      el-table(
        ref='multipleTable',
        :data='productList',
        tooltip-effect='dark',
        @sort-change="sortChange",
        @selection-change='handleSelectionChange')
        el-table-column(type='selection', min-idth='55')
        el-table-column(label='商品 / 价格', min-width='120')
          template(slot-scope='scope')
            div(:class="$style.meta")
              div(:class="$style.avatar")
                img(src="~@/assets/avatar.jpg")
              div(:class="$style.content")
                h4  {{scope.row.name}}
                div(:class="$style.price") {{scope.row.price | yuan}}
        el-table-column(prop='stock', label='库存')
        el-table-column(prop='group', label='商品分组')
        el-table-column(prop='sales', label='总销量')
        el-table-column(label='创建时间', sortable='custom', prop="updatedAt")
          template(slot-scope='scope') {{ scope.row.updatedAt }}
        el-table-column(fixed='right', label='操作', width='100')
          template(slot-scope='scope')
            el-button(type='text') 编辑
            el-button(@click='deleteRow(scope.$index, productList)', type='text') 删除

      wu-pagination(:api="apiMethod", @list="queryProductList", :params="params")
      <!--div(style='margin-top: 20px')-->
          <!--el-button(@click='toggleSelection([productList[1], productList[2]])') 切换选中状态-->
          <!--el-button(@click='toggleSelection()') 取消选择-->

</template>

<script>
import { getProductData } from '@/services/product'
export default {
  name: 'product',
  components: {},
  props: {
  },
  data () {
    return {
      formInline: {
        name: '',
        type: '',
        group: ''
      },
      params: {},
      showMore: false,
      productList: [],
      selection: [],
      apiMethod: getProductData
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
    iconType () {
      return this.showMore ? 'up' : 'down'
    }
  },
  watch: {
  },
  methods: {
    sortChange (sortVal) {
      const sort = `${sortVal.prop}-${sortVal.order}`
      this.changeStatus(sort)
    },
    changeStatus (sort) {
      this.params = {
        sorter: sort
      }
    },
    queryProductList (data) {
      this.productList = data.list
    },
    toggleShowMore () {
      this.showMore = !this.showMore
    },
    onSubmit () {
      console.log('submit!')
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.selection = val
    },
    deleteRow (index, rows) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        rows.splice(index, 1)
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="stylus" module>
  .product
    display block

    .line
      text-align center

    .info
      margin 20px 0

    .meta
      display flex
      align-items flex-start
      .avatar
        margin-right 16px
        width 48px
        height 48px
        line-height 48px
        border-radius 4px
        overflow hidden
        > img
          display block
          width 100%
          height 100%
      .content
        flex 1 0
      h4
        color #409eff
        margin-bottom 4px
        font-size 14px
        line-height 22px
        cursor pointer
      .price
        color rgba(0,0,0,.65)
        font-size 14px
        line-height 22px

    :global
      .el-form
        width 100%
        margin 0
      .el-form-item
        display flex
      .el-form-item__label
        min-width 68px
      .el-form-item .el-form-item__content
        flex 1 1
      .el-select
        width 100%
</style>
