<template>
  <div class="user-info">
    <my-card>
      <template #title>
        <span>修改用户信息</span>
      </template>
      <my-form :data="formData">
        <my-form-item label="登录名称">
          <my-input
            v-model="formData.username"
            type="text"
            placeholder="请输入用户名"
            disabled
          ></my-input>
        </my-form-item>
        <my-form-item label="用户昵称" prop="username">
          <my-input v-model="formData.nickname" type="text" placeholder="请输入用户昵称"></my-input>
        </my-form-item>
        <my-form-item label="用户邮箱">
          <my-input v-model="formData.email" type="email" placeholder="请输入用户邮箱"></my-input>
        </my-form-item>
        <my-form-item class="item-button">
          <my-button type="primary" size="medium" @click="editInfo">提交修改</my-button>
          <my-button size="medium" @click="resetInfo">重置</my-button>
        </my-form-item>
      </my-form>
    </my-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserInfo',
  data() {
    return {
      formData: {
        id: '',
        username: '',
        nickname: '',
        user_pic: '',
        email: ''
      },
      cache: {}
    }
  },
  computed: {
    ...mapState({
      userinfo: (state) => state.userinfo
    })
  },
  mounted() {
    this.formData = this.userinfo
    this.cache = this.userinfo
  },
  methods: {
    async editInfo() {
      try {
        const res = await this.$store.dispatch('editUserInfo', this.formData)
        if (res) alert(res)
      } catch (error) {
        alert(error.message)
      }
    },
    resetInfo() {
      Object.assign(this.formData, this.cache)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  .item-button {
    justify-content: flex-end;
  }
}
</style>
