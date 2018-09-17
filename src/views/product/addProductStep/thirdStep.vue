<template lang="pug">
  div(:class="$style.step")
    wu-result(title="操作成功", description="已经添加一个商品到店铺")
      div(slot="extra")
        el-row(:gutter="12")
          el-col(:class="$style.label", :span="12") 商品名称：
          el-col(:class="$style.values", :span="12") 农家蜂蜜
        el-row(:gutter="12")
          el-col(:class="$style.label", :span="12") 价格：
          el-col(:class="$style.values", :span="12") 1231 元
        el-row(:gutter="12")
          el-col(:class="$style.label", :span="12") 库存：
          el-col(:class="$style.values", :span="12") 12
      div(slot="actions")
        el-button(type="primary", @click="next") 继续添加
        el-button() 查看商品

</template>

<script>
export default {
  name: 'ThirdStep',
  components: {},
  props: {
  },
  data () {
    return {
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
      this.$store.commit('SET_PRODUCT_ACTIVE', 0)
    }
  }
}
</script>

<style lang="stylus" module>
  .step
    display block

    :global
      .el-row
        margin-bottom 12px

    .label
      text-align right

    .values
      text-align left
</style>
