<template>
  <div
    class="my-form-item"
    :style="{
      width: Width + 'px'
    }"
  >
    <label
      :for="inputName"
      v-if="showLabel"
      :style="{
        width: width + 'px'
      }"
    >
      {{ label }}
      <span class="validator" v-if="prop">*</span>
    </label>
    <div class="form-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFormItem',
  inject: ['Width'],
  props: {
    label: String,
    width: {
      type: String,
      default: '80'
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputName: '',
      showLabel: false
    }
  },
  mounted() {
    const slotEle = this.$slots.default[0].elm.querySelector('input')
    if (slotEle) {
      if (this.prop) {
        slotEle.name = this.prop
      }
      this.showLabel = true
      this.inputName = slotEle.name
    }
  }
}
</script>

<style lang="scss" scoped>
.my-form-item {
  display: flex;
  margin: 10px;
  height: 53px;
  justify-content: flex-start;

  label {
    height: 35px;
    line-height: 35px;
    padding-right: 10px;

    .validator {
      color: red;
    }
  }

  .form-slot {
    width: 70%;
  }
}
</style>
