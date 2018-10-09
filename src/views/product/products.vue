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
      el-button(@click='') 批量删除
      el-button(@click='') 批量导出
      el-alert(:class="$style.info", type="info", show-icon, :closable="false" title="已选择 3 项")
      el-table(ref='multipleTable', :data='tableData3', tooltip-effect='dark', @selection-change='handleSelectionChange')
        el-table-column(type='selection', min-idth='55')
        el-table-column(prop='name', label='商品', min-width='120')
        el-table-column(prop='num', label='库存')
        el-table-column(prop='num', label='商品分组')
        el-table-column(prop='num', label='总销量')
        el-table-column(label='创建时间')
          template(slot-scope='scope') {{ scope.row.date }}
        el-table-column(fixed='right', label='操作', width='100')
          template(slot-scope='scope')
            el-button(@click='', type='text') 查看
            el-button(type='text') 编辑

      <!--div(style='margin-top: 20px')-->
          <!--el-button(@click='toggleSelection([tableData3[1], tableData3[2]])') 切换选中状态-->
          <!--el-button(@click='toggleSelection()') 取消选择-->

</template>

<script>
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
      showMore: false,
      tableData3: [{
        date: '2016-05-03',
        name: '商品名称',
        num: 10
      }, {
        date: '2016-05-02',
        name: '商品名称',
        num: 10
      }, {
        date: '2016-05-04',
        name: '商品名称',
        num: 10
      }, {
        date: '2016-05-01',
        name: '商品名称',
        num: 10
      }, {
        date: '2016-05-08',
        name: '商品名称',
        num: 10
      }, {
        date: '2016-05-06',
        name: '商品名称',
        num: 10
      }, {
        date: '2016-05-07',
        name: '商品名称',
        num: 10
      }],
      multipleSelection: []
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
      this.multipleSelection = val
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
