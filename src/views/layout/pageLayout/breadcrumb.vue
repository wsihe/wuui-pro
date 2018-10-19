<template lang="pug">
  div(:class="$style.breadcrumb")
    el-breadcrumb(separator="/")
      el-breadcrumb-item(v-for="(item, index) in list", :key="`breadcrumb-${item.name}`")
        router-link(v-if="item.name === name", :to="{ name: item.name }") {{item.title}}
        span(v-else, :class="{[$style.isActive]: isLast(item)}") {{item.title}}
</template>

<script>
export default {
  name: 'WuBreadcrumb',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      name: 'home'
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
    isLast (route) {
      return route.name === this.$route.name
    }
  }
}
</script>

<style lang="stylus" module>
  $text-color  = alpha(#000, 45%)
  $text-active-color  = alpha(#000, 65%)

  .breadcrumb
    overflow hidden

    .isActive
      color $text-active-color

    :global
      .el-breadcrumb
        margin-bottom 15px
      .el-breadcrumb__inner, .el-breadcrumb__inner a
        font-weight normal
        color $text-color
</style>
