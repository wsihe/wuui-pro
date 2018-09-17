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
          el-tab-pane(label="手机号登录" name="mobile")
          el-alert(v-if="!!errorText", :class="$style.alert", :title="errorText", type="error", show-icon, :closable="false")
          el-form(:model="ruleForm", :rules="rules" ref="ruleForm")
            template(v-if="activeName === 'account'")
              el-form-item(prop="username", key="username")
                el-input(v-model="ruleForm.username", auto-complete="off", placeholder="admin")
                  i.el-icon-edit-outline(slot="prefix")
              el-form-item(prop="password", key="password")
                el-input(v-model="ruleForm.password", auto-complete="off", placeholder="888888")
                  i.el-icon-setting(slot="prefix")
            template(v-if="activeName === 'mobile'")
              el-form-item(prop="mobile", key="mobile")
                el-input(v-model="ruleForm.mobile", auto-complete="off", placeholder="请输入手机号")
                  i.el-icon-mobile-phone(slot="prefix")
              el-form-item(prop="captcha", key="captcha")
                el-row(:gutter="10")
                  el-col(:span="16")
                    el-input(v-model="ruleForm.captcha", auto-complete="off", placeholder="请输入验证码")
                      i.el-icon-message(slot="prefix")
                  el-col(:span="8")
                    el-button(:class="$style.button", @click="onGetCaptcha", :disabled="!!count") {{captchaText}}
        div
          el-checkbox(v-model="checked") 自动登陆
          el-button(:class="$style.right" type="text") 忘记密码
        el-button(:class="$style.submit" type="primary",:loading="loading", @click="submitForm") 登陆
    div(:class="$style.footer")
      span Copyright
      span(:class="$style.copyright") @ 2018 by river
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: {
  },
  data () {
    let validateMobile = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else if (!/^1\d{10}$/.test(value)) {
        callback(new Error('请输入正确的手机号!'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'account',
      checked: true,

      ruleForm: {
        username: '',
        password: '',
        mobile: '',
        captcha: ''
      },
      rules: {
        username: [
          {required: true, trigger: 'change', message: '请输入用户名!'}
        ],
        password: [
          {required: true, trigger: 'change', message: '请输入密码!'}
        ],
        mobile: [
          {validator: validateMobile, trigger: 'change'}
        ],
        captcha: [
          {required: true, trigger: 'change', message: '请输入验证码!'}
        ]
      },

      count: 0,
      loading: false,
      errorText: ''
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    captchaText () {
      return this.count ? this.count : '获取验证码'
    }
  },
  watch: {
  },
  methods: {
    onGetCaptcha () {
      this.count = 59
      this.interval = setInterval(() => {
        this.count -= 1
        if (this.count === 0) {
          clearInterval(this.interval)
        }
      }, 1000)
    },
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.onLogin()
        } else {
          console.log('validate error !!')
          return false
        }
      })
    },
    onLogin () {
      this.loading = true
      this.errorText = ''
      const { username, password } = this.ruleForm
      if (username !== 'admin' || password !== '888888') {
        setTimeout(() => {
          this.loading = false
          this.errorText = '账户或密码错误（admin/888888)'
        }, 400)
        return false
      }
      this.$store.dispatch('LoginIn', this.ruleForm).then(() => {
        this.loading = false
        this.$router.push({name: 'home_index'})
      }).catch(() => {
        this.loading = false
      })
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

  @media (min-width: $screen-md)
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

  .alert
    margin-bottom 24px

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
