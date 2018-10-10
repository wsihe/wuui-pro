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
export default {
  name: 'WuPagination',
  components: {},
  props: {
    params: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      currentPage: 1,
      total: 0
    }
  },
  created () {
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
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
    }
  }
}
</script>

<style lang="stylus">
  .wu-pagination
   margin-top 24px
   text-align center
</style>
