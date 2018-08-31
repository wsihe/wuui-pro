<template lang="pug">
  div(:class="$style.card")
    div(:class="$style.body")
      slot
</template>

<script>
export default {
  name: 'wuCard',
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
  }
}
</script>

<style lang="stylus" module>

  .card
    background #fff
    border-radius 2px
    position relative
    transition all .3s

  .hoverable
    cursor pointer
    &:hover
      box-shadow 0 2px 8px rgba(0, 0, 0, .09)
      border-color rgba(0, 0, 0, 0.09)

  .bordered
    border 1px solid #e8e8e8

  .head
    background transparent
    border-bottom 1px solid #e8e8e8
    padding 0 24px
    border-radius 2px 2px 0 0
    min-height 48px

    .wrapper
      display flex

    .title
      font-size 16px
      padding 16px 0
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
      color alpha(#000, 85%)
      font-weight 500
      display inline-block
      flex 1

  .extra
    float right
    padding 17.5px 0
    text-align right
    margin-left auto

  .body
    padding 24px

  .loading .body
    user-select none

  .loading-content
    p
      margin 0

  .loading-block
    height 14px
    margin 4px 0
    border-radius 2px
    background linear-gradient(90deg, rgba(207, 216, 220, .2), rgba(207, 216, 220, .4), rgba(207, 216, 220, .2))
    animation card-loading 1.4s ease infinite
    background-size 600% 600%

  @keyframes card-loading
    0%,
    100%
      background-position 0 50%
    50%
      background-position 100% 50%

</style>
