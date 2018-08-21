<template>
  <div class="wu-layout">
    <layout></layout>
    <div class="wu-layout-sider"></div>
    <div class="wu-layout">
      <div class="wu-layout-header"></div>
      <div class="wu-layout-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from './layout'
export default {
  name: 'home',
  components: {Layout}
}
</script>
