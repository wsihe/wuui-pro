<template>
  <div class="wu-layout">
    <div class="wu-layout-sider"></div>
    <div class="wu-layout">
      <div class="wu-layout-header"></div>
      <div class="wu-layout-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
