export default {
  clickoutside: {
    bind: function (el, { value }) {
      let onClickOutside = value
      el.handler = function (e) {
        if (el && !el.contains(e.target)) {
          onClickOutside(e)
        }
      }
      document.addEventListener('click', el.handler)
    },
    unbind: function (el) {
      document.removeEventListener('click', el.handler)
      el.handler = null
    }
  }
}
