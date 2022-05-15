<template>
  <form class="my-form" @submit.prevent>
    <div class="form-item-wrap">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'MyForm',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    rule: {
      type: Object,
      default: () => {}
    },
    width: {
      type: String,
      default: '300'
    }
  },
  provide() {
    return {
      Rule: this.rule,
      Width: this.width
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    resetFields() {
      this.$slots.default.forEach((slot) => {
        if (slot.componentInstance.showLabel) {
          // 通过 $slots 获取子组件实例并调用 blur 重置表单
          slot.componentInstance.$slots.default[0].componentInstance.handleBlur()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
