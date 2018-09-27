<template lang="pug">
  div
    div(:class="affixCls", ref="point", :style="styles")
      slot
    div(v-show="slot", :style="slotStyle")
</template>

<script>
import { on, off } from '@/utils/dom'

function getScroll (target, top) {
  const prop = top ? 'pageYOffset' : 'pageXOffset'
  const method = top ? 'scrollTop' : 'scrollLeft'
  let ret = target[prop]
  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method]
  }
  return ret
}

function getOffset (element) {
  const rect = element.getBoundingClientRect()
  const scrollTop = getScroll(window, true)
  const scrollLeft = getScroll(window)
  const docEl = window.document.body
  const clientTop = docEl.clientTop || 0
  const clientLeft = docEl.clientLeft || 0
  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  }
}

export default {
  name: 'WuAffix',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    }
  },
  data () {
    return {
      affix: false,
      styles: {},
      slot: false,
      slotStyle: {},
      scrollElem: null
    }
  },
  computed: {
    offsetType () {
      let type = 'top'
      if (this.offsetBottom >= 0) {
        type = 'bottom'
      }
      return type
    },
    affixCls () {
      return {
        'wu-affix': this.affix
      }
    }
  },
  mounted () {
    on(window, 'scroll', this.handleScroll)
    on(window, 'resize', this.handleScroll)
  },
  beforeDestroy () {
    off(window, 'scroll', this.handleScroll)
    off(window, 'resize', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const affix = this.affix
      const scrollTop = getScroll(window, true)
      const elOffset = getOffset(this.$el)

      if ((elOffset.top - this.offsetTop) < scrollTop && this.offsetType === 'top' && !affix) {
        this.affix = true
        this.slotStyle = {
          width: this.$refs.point.clientWidth + 'px',
          height: this.$refs.point.clientHeight + 'px'
        }
        this.slot = true
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }
        this.$emit('on-change', true)
      } else if ((elOffset.top - this.offsetTop) > scrollTop && this.offsetType === 'top' && affix) {
        this.slot = false
        this.slotStyle = {}
        this.affix = false
        this.styles = null
        this.$emit('on-change', false)
      }
    }
  }
}
</script>

<style lang="stylus">
  .wu-affix
    position fixed
    z-index 9
</style>
