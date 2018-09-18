<template lang="pug">
  div(:class="$style.order")
    wu-card(title="订单列表")
      div(slot="extra")
        el-radio-group(v-model='radio')
          el-radio-button(label='待发货')
          el-radio-button(label='待付款')
          el-radio-button(label='已完成')
        span(:class="$style.extraSearch")
          el-input(placeholder='请输入内容', v-model='input' suffix-icon="el-icon-search")

</template>

<script>
export default {
  name: 'BasicList',
  components: {},
  props: {
  },
  data () {
    return {
      radio: '待发货',
      input: ''
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
</style>
