<template lang="pug">
  .wu-pagination
    el-pagination(
      @current-change='handleCurrentChange',
      :current-page.sync='currentPage',
      :page-size='pageSize',
      :page-sizes='[10, 20, 30, 40]',
      layout='total, sizes, prev, pager, next, jumper',
      :total='total')
</template>

<script>
/**
 * 分页组件封装。
 * 内部处理分页参数，降低页面多个分页式的复杂度。
 * @param url           [请求地址]
 * @param params        [请求参数]
 * @param loading       [是否loading，默认true]
 * @param auto-fetch    [立即查询，默认true]
 * @example
 *   wu-pagination(:api='apiMethod', :params="params", @list="queryList")
 * @return
 *   queryList (data) {
 *     this.list = data.list
 *     this.pageStatus = data.status
 *   }
 * @return list     [列表数据]
 * @return status   [列表状态]
 */
export default {
  name: 'WuPagination',
  components: {},
  props: {
    api: Function,
    params: {
      type: Object,
      default: function () {
        return {}
      }
    },
    loading: {
      type: Boolean,
      default: true
    },
    autoFetch: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      status: 'success',
      currentPage: 1,
      total: 0
    }
  },
  created () {
    if (this.autoFetch) {
      this.queryTableList()
    }
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
    pageSize () {
      return this.params.pageSize || 10
    }
  },
  watch: {
    params: {
      handler () {
        if (this.currentPage === 1) {
          this.queryTableList()
        } else {
          this.currentPage = 1
        }
      },
      deep: true
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
      this.queryTableList()
    },
    async queryTableList () {
      const page = {
        page: this.currentPage,
        pageSize: this.pageSize
      }
      let params = Object.assign({}, this.params, page)
      if (this.loading) {
        this.$emit('loading')
        this.status = 'loading'
      }
      try {
        if (typeof this.api === 'function') {
          let result = await this.api(params)
          let length = result.data.length
          if (!result || !length) {
            this.status = 'empty'
            this.total = 0
            this.setData()
            return false
          }
          this.status = 'success'
          this.total = result.total
          this.setData(result.data)
        }
      } catch (err) {
        this.status = err
        this.setData()
      }
    },
    setData (list) {
      const data = {
        list: list || [],
        status: this.status,
        pageParams: {
          page: this.currentPage,
          pageSize: this.pageSize,
          total: this.total
        }
      }
      this.$emit('list', data)
    }
  }
}
</script>

<style lang="stylus">
  .wu-pagination
   margin-top 24px
   text-align center
</style>
