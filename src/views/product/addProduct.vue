<template lang="pug">
  div(:class="$style.addProduct")
    wu-card
      el-steps(:active="active" simple finish-status="success", :process-status="status")
        el-step(title="填写基本信息")
        el-step(title="编辑商品详情")
        el-step(title="完成")
      div(:class="$style.content")
        keep-alive
          component(:is="current.component")

</template>

<script>
import { mapGetters } from 'vuex'
import FirstStep from './addProductStep/firstStep.vue'
import SecondStep from './addProductStep/secondStep.vue'
import ThirdStep from './addProductStep/thirdStep.vue'
export default {
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
    ...mapGetters({
      active: 'activeStep'
    }),
    status () {
      return this.active === 2 ? 'success' : 'finish'
    },
    panes () {
      return [
        {component: FirstStep},
        {component: SecondStep},
        {component: ThirdStep}
      ]
    },
    current () {
      return this.panes[this.active]
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" module>
  .addProduct
    display block

    .content
      margin 48px 0

     :global
      .el-step__title.is-wait
        font-weight normal
        color alpha(#000, 45%)
</style>
