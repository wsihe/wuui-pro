<template lang="pug">
  wu-card
    div(:class="$style.default")
      div(:class="$style.top") Wuui Pro

      el-input(:class="$style.search", size="large", :placeholder='placeholderText', v-model='input')
        el-select(v-model='select', slot='prepend', placeholder='请选择')
          el-option(label='商品', value='1')
          el-option(label='订单', value='2')

      div(:class="$style.tiles")
        div(:class="$style.tileContainer", v-for="item in tiles", :key="item.icon")
          router-link(:class="$style.tileInner", :to="{name: item.path}" replace)
            div(:class="$style.mdIcon")
              wu-icon(:name="item.icon", :scale="2.6")
            div(:class="$style.mdTitle") {{item.title}}
        div(:class="$style.tileContainer", @click="dialogFormVisible = true")
          div(:class="$style.tileInner")
            div(:class="$style.mdIcon")
              i.el-icon-plus
            div(:class="$style.mdTitle") 添加快捷功能
      el-dialog(title='添加快捷功能', :visible.sync='dialogFormVisible' width="30%" center)
        el-form(:model='form')
          el-form-item(label='功能选择', :label-width='formLabelWidth')
            el-select(v-model='form.region', placeholder='请选择快捷功能')
              el-option(label='数据分析', value='shanghai')
              el-option(label='客户信息', value='beijing')
          el-form-item(label='自定义名称', :label-width='formLabelWidth')
            el-input(v-model='form.name', placeholder="自定义的名称/默认不改变")
          el-form-item(label='首页是否显示', :label-width='formLabelWidth')
            el-switch(v-model='form.delivery')
        .dialog-footer(slot='footer')
          el-button(@click='dialogFormVisible = false') 取 消
          el-button(type='primary', @click='dialogFormVisible = false') 确 定

</template>

<script>
import tilesData from './tiles'
export default {
  props: {
  },
  data () {
    return {
      input: '',
      select: '1',
      tiles: tilesData,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        delivery: false
      },
      formLabelWidth: '100px'
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
    placeholderText () {
      return this.select === '1' ? '请输入商品名或编号' : '请输入订单名或编号'
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" module>
  .default
    display flex
    flex-direction column
    justify-content center
    height calc(100vh - 200px)
    .top
      text-align center
      font-size 33px
      color #409eff
      height 100px
      line-height 100px
      font-family 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif
      font-weight 600

    .search
      width 450px
      margin 10px auto 50px
      :global
        .el-select .el-input
          width 80px
        .el-input-group__prepend
          background-color #fff

    .tiles
      display flex
      flex-wrap wrap
      max-width 400px
      height auto
      justify-content center
      line-height normal
      margin 0 auto
      .tileContainer
        padding 10px
        width 100px
        height 100px
        margin-bottom 15px
        border-radius 5px
        cursor pointer
        &:hover
          box-shadow 0 2px 8px rgba(0,0,0,0.15)
      .tileInner
        display flex
        align-items center
        flex-flow column nowrap
        text-decoration none
      .mdIcon
        display flex
        align-items center
        justify-content center
        width 50px
        height 50px
        border-radius 50%
        background #e6f7ff
      .mdTitle
        font-size 12px
        color #8c8c8c
        font-weight 500
        height 30px
        line-height 30px
        text-align center
        width 96px
        word-break break-word
        word-wrap break-word

    :global
      .el-form-item__content > .el-input
      .el-form-item__content > .el-select
        width 90%
</style>
