<template lang="pug">
  div(:class="$style.step")
    el-row(:gutter="48")
      el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="12")
        div(:class="$style.preview" v-html="value")
      el-col(:xs="24", :sm="12", :md="12", :lg="12", :xl="12")
        wu-design(v-model="value")
    div(:class="$style.buttonContent")
      el-button(type="primary", @click="next") 提交
      el-button() 上一步

</template>

<script>

export default {
  name: 'SecondStep',
  components: {},
  props: {
  },
  data () {
    return {
      value: '编辑商品详情'
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
    next () {
      this.$store.commit('SET_PRODUCT_ACTIVE', 2)
    }
  }
}
</script>

<style lang="stylus" module>
  .step
    display block

    .preview
      float right
      width  300px
      min-height 432px
      padding 20px
      border 1px solid #EDEDED

    .buttonContent
      margin-top 48px
      text-align center
</style>
