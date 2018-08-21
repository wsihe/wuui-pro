<template lang="pug">
  layout(has-sider)
    layout(type="sider") sider
    layout
      layout(type="header") header
      layout(type="content")
        router-view
      layout(type="footer") footer
</template>

<script>
import layout from './layout/layout'
export default {
  name: 'home',
  components: {
    layout
  }
}
</script>
