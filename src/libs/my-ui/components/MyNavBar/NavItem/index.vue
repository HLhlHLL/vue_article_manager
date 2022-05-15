<template>
  <div class="nav-item">
    <router-link :to="path">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  height: 56px;
  line-height: 56px;
  cursor: pointer;
}

.nav-item:hover {
  background-color: #fff;
}
</style>
