<template lang="pug">
  .wu-card-grid
    slot
</template>

<script>
export default {
  name: 'WuCardGrid'
}
</script>

<style lang="stylus">
  .wu-card-grid
    border-radius 0
    border 0
    box-shadow 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, 1px 0 0 0 #e8e8e8 inset, 0 1px 0 0 #e8e8e8 inset
    width 33.33%
    float left
    padding 16px
    transition all .3s
    &:hover
      position relative
      z-index 1
      box-shadow 0 2px 8px rgba(0, 0, 0, 0.15)
</style>
