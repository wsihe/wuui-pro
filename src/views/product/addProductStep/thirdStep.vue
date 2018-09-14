<template lang="pug">
  div(:class="$style.step")
    el-button(type="primary", @click="next") 继续添加

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
</style>
