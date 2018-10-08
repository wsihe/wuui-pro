<template lang="pug">
  div(:class="$style.step")
    el-form(:model="form", label-width="80px", :rules="rules", ref="form")
      el-form-item(label="商品名" prop="name")
        el-input(v-model="form.name")
      //el-form-item(label="分享描述")
        el-input(v-model="form.desc")
      el-form-item(label="商品图")
        el-upload(
          action='https://jsonplaceholder.typicode.com/posts/',
          list-type='picture-card',
          :before-upload="beforeUpload",
          :on-preview='handlePictureCardPreview',
          :on-remove='handleRemove')
          i.el-icon-plus
          span 添加图片
        el-dialog(:visible.sync='dialogVisible')
          img(width='100%', :src='dialogImageUrl', alt='')
      el-form-item(label="商品规格")
        el-select(v-model="form.type", placeholder="请选择商品规格")
          el-option(label="规格一", value="1")
          el-option(label="规格二", value="2")
      el-form-item(label="价格" prop="price")
        el-input(v-model="form.price")
          span(slot="prefix") ¥
      el-form-item(label="划线价")
        el-input(v-model="form.linePrice")
          span(slot="prefix") ¥
      el-form-item(label="库存")
        el-input-number(v-model="form.num", :min="0")
      el-form-item(label="描述")
        el-input(type="textarea", v-model="form.desc")
      el-form-item
        el-button(type="primary", @click="submitForm") 下一步

</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      form: {
        name: '',
        type: '',
        price: '',
        linePrice: '',
        num: 1,
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名', trigger: 'change' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'change' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false
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
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.next()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
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
      .el-input__prefix
        left 10px
      .el-upload-list--picture-card .el-upload-list__item
        width 100px
        height 100px
      .el-upload--picture-card
        width 100px
        height 100px
        line-height 98px
        > i
          margin-right 3px
          font-size 14px
          color #40a9ff
          font-weight 700
        > span
          color #40a9ff
</style>
