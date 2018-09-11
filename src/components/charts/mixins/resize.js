import { debounce } from '@/utils'
import { mapGetters } from 'vuex'

export default {
  mounted () {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.__resizeHandler)
  },
  computed: {
    ...mapGetters({
      isCollapse: 'opened'
    })
  },
  watch: {
    isCollapse () {
      this.__resizeHandler()
    }
  }
}
