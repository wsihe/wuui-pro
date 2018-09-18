<template lang="pug">
  .wu-pagination
    el-pagination(
      @current-change='handleCurrentChange',
      :current-page.sync='currentPage',
      :page-size='pageSize',
      layout='total, prev, pager, next, jumper',
      :total='total')
</template>

<script>
export default {
  name: 'WuPagination',
  components: {},
  props: {
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
