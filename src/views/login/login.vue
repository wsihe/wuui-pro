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
                el-input(type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入内容")
                  i(slot="prefix" class="el-input__icon el-icon-search")
              el-form-item()
                el-input(placeholder="请输入内容", v-model="ruleForm.pass")
                  i(slot="prefix" class="el-input__icon el-icon-search")
          el-tab-pane(label="手机号登录" name="mobile")
            el-form(:model="ruleForm" status-icon :rules="rules" ref="ruleForm")
              el-form-item(prop="pass")
                el-input(type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入内容")
                  i(slot="prefix" class="el-input__icon el-icon-search")
              el-form-item()
                el-input(placeholder="请输入内容", v-model="ruleForm.pass")
                  i(slot="prefix" class="el-input__icon el-icon-search")
        div
          el-checkbox(v-model="checked") 自动登陆
          el-button(:class="$style.right" type="text") 忘记密码
        el-button(:class="$style.submit" type="primary",:loading="false") 登陆
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
      }
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
  }
}
</script>

<style lang="stylus" module>
  @import "~@/styles/define.styl"

  .right
    vertical-align top
    color #999
    float right

  .container
    display flex
    flex-direction column
    height 100vh
    overflow auto
    background #f0f2f5

  .content
    padding 32px 0
    flex 1

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
    @media screen and (max-width: $screen-sm)
      width 95%

    .icon
      font-size 24px
      color rgba(0, 0, 0, 0.2)
      margin-left 16px
      vertical-align middle
      cursor pointer
      transition color 0.3s

      &:hover
        color $primary-color

    .other
      text-align left
      margin-top 24px
      line-height 22px

      .register
        float right

  .submit
    width 100%
    margin-top 24px

</style>
