<template lang="pug">
  div(:class="$style.product")
    wu-card
      el-form(:model='formInline', :inline="true")
        el-row(:gutter="48")
          el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
            el-form-item(label='审批人')
              el-input(v-model='formInline.user', placeholder='审批人')
          el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
            el-form-item(label='活动区域')
              el-select(v-model='formInline.region', placeholder='活动区域')
                el-option(label='区域一', value='shanghai')
                el-option(label='区域二', value='beijing')
          el-col(:xs="24", :sm="8", :md="8", :lg="8", :xl="8")
            el-form-item
              el-button(type='primary', @click='onSubmit') 查询
              el-button(@click='onSubmit') 重置
              el-button(type="text")
                span 展开
                i.el-icon-arrow-down
      el-table(ref='multipleTable', :data='tableData3', tooltip-effect='dark', style='width: 100%', @selection-change='handleSelectionChange')
        el-table-column(type='selection', width='55')
        el-table-column(label='日期', width='120')
          template(slot-scope='scope') {{ scope.row.date }}
        el-table-column(prop='name', label='姓名', width='120')
        el-table-column(prop='address', label='地址', show-overflow-tooltip='')
      div(style='margin-top: 20px')
        el-button(@click='toggleSelection([tableData3[1], tableData3[2]])') 切换选中状态
        el-button(@click='toggleSelection()') 取消选择

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
        user: '',
        region: ''
      },
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
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
  },
  watch: {
  },
  methods: {
    onSubmit() {
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

    :global
      .el-form
        width 100%
        margin 0
      .el-form-item
        display flex
      .el-form-item .el-form-item__content
        flex 1 1
      .el-select
        width 100%
</style>
