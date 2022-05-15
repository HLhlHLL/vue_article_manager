<template>
  <div class="my-header">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="left">
      <div class="menu-wrap" v-menu>
        <div class="avatar">
          <slot name="avatar"></slot>
        </div>
        <div class="menu">
          <div class="inner">
            <div v-for="(item, index) in menuData" :key="index" class="menu-item">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="logout">
        <my-button size="mini" @click="$emit('logout')">退出</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import { menu } from '../../directives'

export default {
  name: 'MyHeader',
  directives: {
    menu
  },
  emits: ['logout'],
  props: {
    menuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.my-header {
  display: flex;
  height: 60px;
  line-height: 60px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(231, 240, 253);
  padding: 0 10px;
  z-index: -2;

  .title {
    margin: 0;
    width: 200px;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
  }

  .left {
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 50px;
    z-index: 1;

    .avatar {
      width: 50px;
      height: 50px;
      border: 2px solid rgb(224, 224, 224);
      border-radius: 5px;
      overflow: hidden;
      box-sizing: border-box;
      cursor: pointer;

      img {
        width: 50px;
        height: 50px;
      }
    }

    .avatar:hover {
      box-shadow: 1px 2px 3px rgba($color: #000000, $alpha: 0.5);
    }

    .menu {
      position: absolute;
      display: none;
      top: 20px;
      left: -6px;
      background: transparent;
      z-index: -1;

      .inner {
        padding-top: 10px;
        border-radius: 5px;
        overflow: hidden;

        .menu-item {
          text-align: center;
          height: 40px;
          line-height: 40px;
          width: 80px;
          background-color: rgb(231, 240, 253);
        }

        .menu-item:hover {
          background-color: #fefefe;
        }

        .menu-item:first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
      }
    }
  }
}
</style>
