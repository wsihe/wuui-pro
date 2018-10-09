<template lang="pug">
  .common-desc
    slot
</template>

<script>
export default {
  name: 'CommonDesc',
  props: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  $text-color  = alpha(#000, 45%)

  .common-desc
    padding 0 96px
    color $text-color
    h3
      font-size 16px
      margin 0 0 12px 0
      color $text-color
      line-height: 32px
    h4
      margin 0 0 4px 0
      color $text-color
      font-size 14px
      line-height 22px
    p
      margin-top 0
      margin-bottom 12px
      line-height 22px
</style>
