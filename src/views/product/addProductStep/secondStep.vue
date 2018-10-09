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
    wu-divider
    common-desc
      h3 说明
      h4 商品详情
      p 向客户展示商品的细节与优势，常见的内容有：1、整体展示；2、细节图片介绍；3、规格颜色说明；4、购买须知；
</template>

<script>
import CommonDesc from './description'
export default {
  components: {CommonDesc},
  name: 'SecondStep',
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
