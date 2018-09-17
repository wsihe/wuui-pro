<template lang="pug">
  .wu-result
    .wu-result-icon
      i(:class="`el-icon-${iconType}`")
    .wu-result-title {{title}}
    .wu-result-description(v-if="description || $slots.description")
      slot(name="description") {{description}}
    .wu-result-extra(v-if="$slots.extra")
      slot(name="extra") {{extra}}
    .wu-result-actions(v-if="$slots.actions")
      slot(name="actions")
</template>

<script>
export default {
  name: 'WuResult',
  components: {},
  props: {
    type: {
      type: String,
      default: 'success'
    },
    title: String,
    description: String,
    extra: String
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
    iconType () {
      return this.type === 'success' ? 'success' : 'error'
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  @import "~@/styles/define.styl"

  .wu-result
    text-align center
    width 72%
    margin 0 auto
    @media screen and (max-width: $screen-xs)
      width 100%

    &-icon
      font-size 72px
      line-height 72px
      margin-bottom 24px

      & > .el-icon-success
        color #52c41a

      & > .el-icon-error
        color #f5222d

    &-title
      font-size 24px
      color $heading-color
      font-weight 500
      line-height 32px
      margin-bottom 16px

    &-description
      font-size 14px
      line-height 22px
      color $text-color-secondary
      margin-bottom 24px

    &-extra
      background #fafafa
      padding 24px 40px
      border-radius $border-radius-sm
      text-align left

      @media screen and (max-width: $screen-xs)
        padding 18px 20px

    &-actions
      margin-top 32px

      button:not(:last-child)
        margin-right 8px

</style>
