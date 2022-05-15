<template>
  <div class="my-modal" v-show="modalVisible">
    <div
      class="main"
      :style="{
        width: width + 'px',
        height: height + 'px'
      }"
    >
      <i class="iconfont icon-close" @click="closeModal"></i>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  emits: ['closeModal'],
  props: {
    modalVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '600'
    },
    height: {
      type: String,
      default: '600'
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #eee, $alpha: 0.5);
  z-index: 999;

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;

    img {
      width: 600px;
      height: 600px;
      border-radius: 10px;
    }

    .icon-close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
}
</style>
