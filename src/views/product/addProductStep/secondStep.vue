<template lang="pug">
  div(:class="$style.step")
    el-button(type="primary", @click="next") 下一步

</template>

<script>
export default {
  name: 'SecondStep',
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
      this.$store.commit('SET_PRODUCT_ACTIVE', 2)
    }
  }
}
</script>

<style lang="stylus" module>
  .step
    display block
</style>
