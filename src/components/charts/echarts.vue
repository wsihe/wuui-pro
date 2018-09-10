<template lang="pug">
  .wu-echarts
</template>

<script>
import resize from './mixins/resize'
import echarts from 'echarts/lib/echarts'
import customTheme from './theme.json'
echarts.registerTheme('customTheme', customTheme)

const EVENTS = [
  'click'
]

export default {
  name: 'wuChart',
  mixins: [resize],
  props: {
    options: Object,
    theme: {
      type: [String, Object],
      default: 'customTheme'
    },
    initOptions: Object
  },
  data () {
    return {
      chart: null
    }
  },
  created () {
  },
  mounted () {
    if (this.opts) {
      this.init()
    }
  },
  destroyed () {
  },
  computed: {
    opts () {
      return this.options
    }
  },
  watch: {
    opts: {
      handler (options) {
        if (!this.chart && options) {
          this.$nextTick(() => {
            this.init()
          })
        } else {
          this.$nextTick(() => {
            this.chart.setOption(this.opts)
          })
        }
      },
      deep: true
    }
  },
  activated () {
    this.chart && this.chart.resize()
  },
  methods: {
    init () {
      if (this.chart) {
        return
      }
      let chart = echarts.init(this.$el, this.theme, this.initOptions)
      chart.setOption(this.opts || {}, true)

      EVENTS.forEach(event => {
        chart.off(event)
        chart.on(event, params => {
          this.$emit(event, params)
        })
      })

      this.chart = chart
    }
  }
}
</script>

<style lang="stylus">
  .wu-echarts
    width 100%
    height 200px
</style>
