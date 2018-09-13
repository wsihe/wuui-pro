<template lang="pug">
  svg(
    version="1.1",
    :class="clazz",
    :role="label ? 'img' : 'presentation'",
    :aria-label="label",
    :width="width",
    :height="height",
    :viewBox="box",
    :style="style")
    use(:xlink:href="icon.id")

</template>

<script>
export default {
  name: 'WuIcon',
  components: {},
  props: {
    name: {
      type: String,
      required: true
    },
    scale: [Number, String],
    spin: Boolean,
    label: String,
    index: String,
    currentIndex: String
  },
  data () {
    return {
      xml: null
    }
  },
  async created () {
    if (!this.name) {
      return
    }
    this.xml = await import('@/assets/icons/' + this.name + '.svg')
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
    normalizedScale () {
      let scale = this.scale
      scale = typeof scale === 'undefined' ? 1 : Number(scale)
      if (isNaN(scale) || scale <= 0) {
        console.warn(`Invalid prop: prop "scale" should be a number over 0.`, this)
        return 1
      }
      return scale
    },
    clazz () {
      return {
        'wu-icon': true,
        spin: this.spin,
        active: this.index === this.currentIndex
      }
    },
    icon () {
      if (!this.xml) {
        return {
          width: 0,
          height: 0,
          id: ''
        }
      }
      const t = this.xml.default.viewBox.split(' ')
      return {
        width: t[2],
        height: t[3],
        id: '#' + this.xml.default.id
      }
    },
    box () {
      return `0 0 ${this.icon.width} ${this.icon.height}`
    },
    width () {
      return this.icon.width / 112 * this.normalizedScale
    },
    height () {
      return this.icon.height / 112 * this.normalizedScale
    },
    style () {
      if (this.normalizedScale === 1) {
        return false
      }
      return {
        fontSize: this.normalizedScale + 'em'
      }
    }
  },
  watch: {
    async name (val) {
      if (!val) {
        return
      }
      this.xml = await import('@/assets/icons/' + this.name + '.svg')
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  .wu-icon
    display inline-block
    fill currentColor

  .wu-icon.spin
    animation fa-spin 1s 0s infinite linear

  @keyframes fa-spin
    0%
      transform rotate(0deg)
    100%
      transform rotate(360deg)

</style>
