<template>
  <div class="home">
    <my-header :menuData="menuData" @logout="logout">
      <template #title>
        <span>Manager</span>
      </template>
      <template #avatar>
        <img :src="userinfo.user_pic" />
      </template>
    </my-header>
    <div class="content">
      <div class="nav-bar">
        <my-nav-bar :data="navData"></my-nav-bar>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import menuData from '@/utils/json/menu.json'
import navData from '@/utils/json/nav.json'
import { removeItem } from '@/utils/localStorage.js'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      menuData,
      navData
    }
  },
  computed: {
    ...mapState({
      userinfo: (state) => state.userinfo
    })
  },
  mounted() {
    try {
      this.$store.dispatch('getUserInfo')
    } catch (error) {
      alert(error.message)
    }
  },
  methods: {
    logout() {
      removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
    display: flex;

    .nav-bar {
      background-color: rgb(231, 240, 253);
    }

    .main {
      flex: 1;
    }
  }
}
</style>
