<template lang="pug">
  div(:class="$style.step")
    el-form(ref="form", :model="form", label-width="80px")
      el-form-item(label="活动名称")
        el-input(v-model="form.name")
      el-form-item(label="活动区域")
        el-select(v-model="form.region", placeholder="请选择活动区域")
          el-option(label="区域一", value="shanghai")
          el-option(label="区域二", value="beijing")
      el-form-item(label="活动时间")
        el-col(:span="11")
          el-date-picker(type="date", placeholder="选择日期", v-model="form.date1", style="width: 100%;")
        el-col.line(:span="2") -
        el-col(:span="11")
          el-time-picker(type="fixed-time", placeholder="选择时间", v-model="form.date2", style="width: 100%;")
      el-form-item(label="即时配送")
        el-switch(v-model="form.delivery")
      el-form-item(label="活动性质")
        el-checkbox-group(v-model="form.type")
          el-checkbox(label="美食/餐厅线上活动", name="type")
          el-checkbox(label="地推活动", name="type")
          el-checkbox(label="线下主题活动", name="type")
          el-checkbox(label="单纯品牌曝光", name="type")
      el-form-item(label="特殊资源")
        el-radio-group(v-model="form.resource")
          el-radio(label="线上品牌商赞助")
          el-radio(label="线下场地免费")
      el-form-item(label="活动形式")
        el-input(type="textarea", v-model="form.desc")
      el-form-item
        el-button(type="primary", @click="next") 下一步

</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
    next () {
      this.$store.commit('SET_PRODUCT_ACTIVE', 1)
    }
  }
}
</script>

<style lang="stylus" module>
  .step
    display block

  :global
    .el-form
      width 400px
      margin 24px auto
</style>
