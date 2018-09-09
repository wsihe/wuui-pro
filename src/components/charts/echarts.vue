<template lang="pug">
  .wu-echarts
</template>

<script>
  import { isEmpty } from '@/utils'
  import resize from './mixins/resize'
  import echarts from 'echarts/lib/echarts'

  const MOUSE_EVENTS = [
    'click'
  ]

  export default {
    name: 'GfEcharts',
    mixins: [resize],
    props: {
      options: Object,
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
        this.$nextTick(() => {
          this.init()
        })
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
        let chart = echarts.init(this.$el)
        const empty = isEmpty(this.initOptions, false)
        if (this.initOptions && !empty) {
          chart.setOption(this.initOptions)
        }
        chart.setOption(this.opts)

        MOUSE_EVENTS.forEach(event => {
          chart.off(event) // 防止重复注册同一事件
          chart.on(event, params => {
            this.$emit('chart' + event, params)
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
