<template lang="pug">
  div 主页
</template>

<script>
export default {
  name: 'Layout',
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

<style lang="stylus">
  @import "~@/styles/define.styl"

  $layout-prefix-cls = "wu-layout";

  .{$layout-prefix-cls}
    display: flex;
    flex-direction: column;
    flex: auto;
    background: $layout-body-background;

    &-has-sider
      flex-direction: row;
      > .{$layout-prefix-cls},
      > .{$layout-prefix-cls}-content
        overflow-x: hidden;

    &-header,
    &-footer
      flex: 0 0 auto;

    &-header
      background: $layout-header-background;
      padding: $layout-header-padding;
      height: $layout-header-height;
      line-height: $layout-header-height;

    &-footer
      padding: $layout-footer-padding;
      color: $text-color;
      font-size: $font-size-base;

    &-content
      flex: auto;

    &-sider
      transition: all .15s cubic-bezier(0.645, 0.045, 0.355, 1)
      position: relative;
      background: $layout-sider-background;

      /* fix firefox can't set width smaller than content on flex item */
      min-width: 0;

      &-has-trigger
        padding-bottom: $layout-trigger-height;

      &-right
        order: 1;

      &-trigger
        position: fixed;
        text-align: center;
        bottom: 0;
        cursor: pointer;
        height: $layout-trigger-height;
        line-height: $layout-trigger-height;
        color: $layout-trigger-color;
        // background: fade($layout-trigger-background, 100);
        z-index: 1;
        transition: all .15s cubic-bezier(0.645, 0.045, 0.355, 1)

      &-zero-width
        & > *
          overflow: hidden;

        &-trigger
          position: absolute;
          top: $layout-header-height;
          right: -$layout-zero-trigger-width;
          text-align: center;
          width: $layout-zero-trigger-width;
          height: $layout-zero-trigger-height;
          line-height: $layout-zero-trigger-height;
          background: $layout-sider-background;
          color: #fff;
          font-size: $layout-zero-trigger-width / 2;
          border-radius: 0 $border-radius-base $border-radius-base 0;
          cursor: pointer;
          transition: background .3s ease;

          &:hover
            background: tint($layout-sider-background, 10%);
</style>
