<template lang="pug">
  div(:class="$style.header")
    span(:class="[$style.action, $style.trigger]", @click="toggleSider")
      wu-icon(:name="menuIcon", :scale="2.2")
    div(:class="$style.right")
      span(:class="[$style.action, $style.search]", @click="toggleSearch" v-clickoutside="closeSearch")
        i.el-icon-search()
        el-input(ref="input", :class="[$style.input, {[$style.show]: showInput}]", v-model="search" placeholder="订单编号")
      span(:class="[$style.action, $style.noticeButton]")
        el-badge(:class="$style.badge", :value="100", :max="10")
          i.el-icon-bell
      el-dropdown(size="medium", @command="handleCommand")
        span(:class="[$style.action, $style.account]")
          img(:class="$style.avatar" src="~@/assets/avatar.jpg")
          span(:class="$style.name") river
        el-dropdown-menu(slot="dropdown")
          el-dropdown-item(disabled)
            i.el-icon-setting(:class="$style.icon")
            span 个人中心
          el-dropdown-item(command="logout", divided)
            i.el-icon-edit-outline(:class="$style.icon")
            span 退出登陆
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'wuHeader',
  components: {},
  props: {
  },
  data () {
    return {
      search: '',
      showInput: false
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
    ...mapGetters([
      'opened'
    ]),
    menuIcon () {
      return this.opened ? 'menu-fold' : 'menu-unfold'
    }
  },
  watch: {
  },
  methods: {
    handleCommand (type) {
      if (type === 'logout') {
        this.onLogout()
      }
    },
    async onLogout () {
      try {
        await this.$store.dispatch('Logout')
        this.$router.push({name: 'login'})
      } catch (err) {
        console.log(err)
      }
    },
    toggleSider () {
      this.$store.commit('TOGGLE_SIDER')
    },
    closeSearch () {
      this.showInput = false
    },
    toggleSearch (event) {
      const target = event.target
      this.$refs.input.focus()
      if (this.showInput && target.tagName === 'INPUT') {
        return
      }
      this.showInput = !this.showInput
    }
  }
}
</script>

<style lang="stylus" module>
  @import "~@/styles/define.styl"

  .header
    height 64px
    padding 0 12px 0 0
    background #fff
    box-shadow 0 1px 4px rgba(0, 21, 41, 0.08)
    position relative

    :global
      .el-badge__content.is-fixed
        position absolute
        top 19px
        right 16px
        z-index 99

  .logo
    height 64px
    line-height 58px
    vertical-align top
    display inline-block
    padding 0 0 0 24px
    cursor pointer
    font-size 20px
    img
      display inline-block
      vertical-align middle

  .trigger
    cursor pointer
    font-size 18px
    height 64px
    line-height 64px
    padding 22px 24px
    transition all .3s,padding 0s
    &:hover
      background $primary-1
    :global
      .wu-icon
        position relative
        top 3px

  .right
    float right
    height 100%
    .action
      cursor pointer
      padding 0 12px
      display inline-block
      transition all 0.3s
      height 100%
      > i
        font-size 16px
        vertical-align middle
        color $text-color
      &:hover
        background $primary-1
    .search
      padding 0 12px
      &:hover
        background transparent
    .input
      background transparent
      border-radius 0
      transition width .3s,margin-left .3s
      width 0
      &:global(.el-input--medium .el-input__inner)
        border none
        border-radius 0
      &.show
        margin-left 8px
        width 210px
        &:global(.el-input--medium .el-input__inner)
          border-bottom 1px solid #d9d9d9
    .badge
      font-size 18px
    .noticeButton
      position relative
      cursor pointer
      display inline-block
      transition all 0.3s
      z-index 99
    .account
      .avatar
        display inline-block
        width 24px
        height 24px
        line-height 24px
        border-radius 16px
        margin 20px 8px 20px 0
        color $primary-color
        background rgba(255, 255, 255, 0.85)
        vertical-align middle

  .icon
    display inline-block
    margin-right 8px

  @media only screen and (max-width: $screen-md)
    .header
      .name
        display none
      i.trigger
        padding 0 12px
      .logo
        padding-right 12px
        position relative
      .right
        position absolute
        right 12px
        top 0
        background #fff
        .account
          .avatar
            margin-right 0
</style>
