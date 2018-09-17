<template lang="pug">
  .wu-design
    div(:id="uuid")
</template>

<script>
import initConfig from './config'

const UEDITOR_LOADED_KEY = '__ZENT_UEDITOR_LOADED_STATUS__'
const UEDITOR_HOME_URL = './UEditor/'

export default {
  name: 'WuDesign',
  components: {},
  props: {
    value: {
      type: String,
      default: 'UEditor'
    },
    editorConfig: {
      type: Object,
      default: function () {
        return {

        }
      }
    }
  },
  data () {
    return {
      editor: null,
      uuid: 'design_',
      ueditorUrl: `${UEDITOR_HOME_URL}ueditor.all.min.js`,
      ueditorConfigUrl: `${UEDITOR_HOME_URL}ueditor.config.js`
    }
  },
  created () {
    this.uuid = `design_${this._uid}`
  },
  mounted () {
    let timer = null

    if (window.UE) {
      this.initRichText()
    } else {
      timer = setInterval(() => {
        let status = window[UEDITOR_LOADED_KEY]
        if (status === 1) {
          // 加载中
        } else if (status === 2) {
          clearInterval(timer)
          this.initRichText()
        } else {
          this.loadUEditorScript()
        }
      }, 50)
    }
  },
  destroyed () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    loadUEditorScript () {
      if (window[UEDITOR_LOADED_KEY] !== undefined) return

      window[UEDITOR_LOADED_KEY] = 1 // 加载中

      window.UEDITOR_HOME_URL = ''
      window.UEDITOR_IFRAME_URL = ''

      this.createScript(this.ueditorConfigUrl).then(() => {
        this.createScript(this.ueditorUrl).then(() => {
          window[UEDITOR_LOADED_KEY] = 2 // 加载完成
        })
      })
    },
    createScript (url) {
      return new Promise((resolve, reject) => {
        const oScript = document.createElement('script')
        oScript.type = 'text/javascript'
        oScript.async = true
        oScript.src = url

        oScript.onload = function () {
          resolve()
        }

        document.body.appendChild(oScript)
      })
    },
    initRichText () {
      const UE = window.UE
      const target = document.getElementById(this.uuid)

      if (!UE || !target) return false

      let { value, editorConfig } = this

      let conf = Object.assign({}, initConfig, editorConfig)

      let editor = new UE.ui.Editor(conf)
      this.editor = editor

      editor.addListener('blur contentChange', () => {
        this.onChange()
      })
      editor.render(target)
      editor.ready(() => {
        editor.setContent(value)
      })
    },
    onChange () {
      let val = this.editor.getContent()
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus">
  .wu-design
    width 388px
</style>
