<template lang="pug">
  div(:class="$style.container")
    div(:class="$style.content")
      div(:class="$style.top")
        div(:class="$style.header")
          img(:class="$style.logo" src="~@/assets/logo.png")
          span(:class="$style.title") Wuui Pro
        div(:class="$style.desc") Wuui Pro 基于 Vue 中后台系统解决方案
      div(:class="$style.main")
        el-tabs(:class="$style.tab" v-model="activeName")
          el-tab-pane(label="账户密码登录" name="account")
            el-form(:model="ruleForm" status-icon :rules="rules" ref="ruleForm")
              el-form-item(prop="pass")
                el-input(type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="admin")
                  i(slot="prefix" class="el-input__icon el-icon-service")
              el-form-item()
                el-input(placeholder="888888", v-model="ruleForm.pass")
                  i(slot="prefix" class="el-input__icon el-icon-setting")
          el-tab-pane(label="手机号登录" name="mobile")
            el-form(:model="ruleForm" status-icon :rules="rules" ref="ruleForm")
              el-form-item(prop="pass")
                el-input(type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入手机号")
                  i(slot="prefix" class="el-input__icon el-icon-mobile-phone")
              el-form-item()
                el-row(:gutter="10")
                  el-col(:span="16")
                    el-input(placeholder="请输入验证码", v-model="ruleForm.pass")
                      i(slot="prefix" class="el-input__icon el-icon-message")
                  el-col(:span="8")
                    el-button(:class="$style.button" v-if="!showCount", @click="onGetCaptcha") 获取验证码
                    el-button(:class="$style.button" v-if="showCount", disabled) {{count}} s
        div
          el-checkbox(v-model="checked") 自动登陆
          el-button(:class="$style.right" type="text") 忘记密码
        el-button(:class="$style.submit" type="primary",:loading="false", @click="submit") 登陆
    div(:class="$style.footer")
      span Copyright
      span(:class="$style.copyright") @ 2018 by river
</template>

<script>
export default {
  name: 'tpl',
  components: {},
  props: {
  },
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'account',
      checked: true,

      ruleForm: {
        pass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },

      showCount: false,
      count: 59
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onGetCaptcha () {
      this.showCount = true
      this.count = 59
      this.interval = setInterval(() => {
        this.count -= 1
        if (this.count === 0) {
          this.showCount = false
          clearInterval(this.interval)
        }
      }, 1000)
    },
    submit () {
      this.$router.push({name: 'home_index'})
    }
  }
}
</script>

<style lang="stylus" module>
  @import "~@/styles/define.styl"

  .right
    padding 0
    color #999
    float right

  .container
    display flex
    flex-direction column
    height 100vh
    overflow auto
    background #f0f2f5

    :global
      .el-tabs .el-tabs__header
        margin 0  auto 24px
        width 194px

  .content
    padding 32px 0
    flex 1

  @media (min-width: $screen-md-min)
    .content
      padding 112px 0 24px 0

  .top
    text-align center

  .header
    height 44px
    line-height 44px
    a
      text-decoration none

  .logo
    height 44px
    vertical-align top
    margin-right 16px
    margin-top -2px

  .title
    font-size 33px
    color $heading-color
    font-family 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif
    font-weight 600
    position relative
    top 2px

  .desc
    font-size $font-size-base
    color $text-color-secondary
    margin-top 12px
    margin-bottom 40px

  .main
    width 368px
    margin 0 auto

  .button
    width 100%

  .submit
    width 100%
    margin-top 24px

  .footer
    padding 0 16px
    margin 48px 0 24px
    text-align center

  .copyright
    color @text-color-secondary
    font-size @font-size-base

</style>
