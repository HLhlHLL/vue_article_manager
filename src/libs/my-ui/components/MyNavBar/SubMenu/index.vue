<template>
  <div class="sub-menu">
    <div class="title" @click=";(show = !show), (upOrDown = !upOrDown)">
      <slot></slot>
      <span class="subTag">
        <i class="iconfont icon-arrow_down" v-if="!upOrDown"></i>
        <i class="iconfont icon-arrow_up" v-else></i>
      </span>
    </div>
    <transition name="nav">
      <div class="item" v-show="show">
        <template v-for="item in submenuData">
          <div class="sub-item" :key="item.id" v-if="!item.children">
            <router-link class="link" :to="item.path">{{ item.title }}</router-link>
          </div>
          <sub-menu :key="item.id" v-else :submenuData="item.children">
            <router-link class="link" :to="item.path">{{ item.title }}</router-link>
          </sub-menu>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  props: {
    submenuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: false,
      upOrDown: false
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-menu {
  .title {
    position: relative;
    height: 56px;
    line-height: 56px;

    .subTag {
      position: absolute;
      top: 0;
      right: 20px;
    }
  }

  .sub-item {
    height: 56px;
    line-height: 56px;
  }

  .title:hover,
  .sub-item:hover {
    background-color: #fff;
    cursor: pointer;
  }

  .item {
    width: 200px;
    background-color: rgb(234, 239, 247);

    .link {
      display: block;
      width: 180px;
      height: 100%;
      padding-left: 20px;
    }
  }

  .nav-enter-active,
  .nav-leave-active {
    transition: all 0.3s linear;
  }

  .nav-enter {
    opacity: 0;
  }

  .nav-leave {
    opacity: 1;
  }

  .nav-enter-to {
    opacity: 1;
  }

  .nav-leave-to {
    opacity: 0;
  }
}
</style>
