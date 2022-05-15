<template>
  <div class="my-nav-bar">
    <template v-for="item in data">
      <nav-item :key="item.id" v-if="!item.children" :path="item.path">{{ item.title }}</nav-item>
      <sub-menu :key="item.id" v-else :submenuData="item.children">{{ item.title }}</sub-menu>
    </template>
  </div>
</template>

<script>
import NavItem from './NavItem'
import SubMenu from './SubMenu'

export default {
  name: 'MyNavBar',
  components: {
    NavItem,
    SubMenu
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.my-nav-bar {
  width: 200px;
  height: 100%;
  text-align: center;
}
</style>
