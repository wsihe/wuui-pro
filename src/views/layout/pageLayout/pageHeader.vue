<template lang="pug">
  div(:class="$style.pageHeader")
    wu-breadcrumb(:list="breadCrumbList")
</template>

<script>
import { mapGetters } from 'vuex'
import WuBreadcrumb from './breadcrumb'
export default {
  name: 'PageHeader',
  components: {
    WuBreadcrumb
  },
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
    ...mapGetters([
      'breadCrumbList'
    ])
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" module>
  $border-color     = #e8e8e8

  .pageHeader
    background #ffffff
    padding 15px 32px 0 32px
    border-bottom $border-color
</style>
