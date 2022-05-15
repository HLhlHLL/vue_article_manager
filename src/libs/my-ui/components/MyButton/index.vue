<template>
  <button
    class="my-button"
    :disabled="disabled"
    :class="[type, size, circle ? 'circle' : '', disabled ? 'disabled' : '']"
    @click="handleClick"
  >
    <span>
      <span v-if="icon" :class="'iconfont ' + icon"></span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: String,
    size: {
      type: String,
      default: 'middle'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: String
  },
  methods: {
    async handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 100px;
  height: 40px;
  margin: 0 1px;
  line-height: 40px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  border: none;
  color: rgb(96, 98, 102);
  background-color: #eee;
  font-size: 14px;
}

.primary {
  border: none;
  background-color: rgb(72, 105, 209);
  color: #fff;
}
.info {
  border: none;
  background-color: rgb(166, 169, 173);
  color: #fff;
}
.success {
  border: none;
  background-color: rgb(103, 194, 58);
  color: #fff;
}
.warning {
  border: none;
  background-color: rgb(230, 162, 60);
  color: #fff;
}
.danger {
  border: none;
  background-color: rgb(247, 137, 137);
  color: #fff;
}

.circle {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.medium {
  width: 90px;
  height: 35px;
  line-height: 35px;
}

.small {
  width: 80px;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
}

.mini {
  width: 70px;
  height: 25px;
  font-size: 12px;
  line-height: 25px;
}
</style>
