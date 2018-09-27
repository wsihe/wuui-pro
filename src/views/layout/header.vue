<template lang="pug">
  div(:class="$style.header")
    span(:class="[$style.action, $style.trigger]", @click="toggleSider")
      wu-icon(:name="menuIcon", :scale="2.2")
    div(:class="$style.right")
      span(:class="[$style.action, $style.search]", @click="toggleSearch" v-clickoutside="closeSearch")
        i.el-icon-search
        el-input(ref="input", :class="[$style.input, {[$style.show]: showInput}]", v-model="search" placeholder="商品名称/编号")
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
  $text-color     = alpha(#000, 65%)
  $header-height  = 54px
  $primary-color  =  #108ee9
  $primary-blue   =  #e6f7ff

  .header
    position relative
    height $header-height
    line-height $header-height
    padding 0 12px 0 0
    background #fff
    border-bottom 1px solid #f0f0f0
    // box-shadow 0 1px 4px rgba(0, 21, 41, 0.08)

    :global
      .el-badge__content.is-fixed
        position absolute
        top 19px
        right 16px
        z-index 99

  .trigger
    cursor pointer
    font-size 18px
    height $header-height
    line-height $header-height
    padding 17px 18px
    transition all .3s,padding 0s
    &:hover
      background $primary-blue
    :global
      .wu-icon
        position relative
        top 3px

  .right
    float right
    height 100%
    overflow hidden
    .action
      display inline-block
      height 100%
      padding 0 12px
      transition all 0.3s
      cursor pointer
      > i
        font-size 16px
        vertical-align middle
        color $text-color
      &:hover
        background $primary-blue

    .search
      padding 0 12px
      &:hover
        background transparent
    .input
      background transparent
      border-radius 0
      transition width .3s,margin-left .3s
      width 0
      &:global(.el-input .el-input__inner)
        border none
        border-radius 0
      &.show
        margin-left 8px
        width 210px
        &:global(.el-input .el-input__inner)
          border-bottom 1px solid #d9d9d9

    .badge
      font-size 18px
    .noticeButton
      position relative
      transition all 0.3s
      z-index 99
    .account
      .avatar
        display inline-block
        width 24px
        height 24px
        line-height 24px
        border-radius 16px
        color $primary-color
        background rgba(255, 255, 255, 0.85)
        vertical-align middle

  .icon
    display inline-block
    margin-right 8px

  @media only screen and (max-width: 992px)
    .header
      .name
        display none
      i.trigger
        padding 0 12px
      .right
        position absolute
        right 12px
        top 0
        background #fff
        .account
          .avatar
            margin-right 0
</style>
