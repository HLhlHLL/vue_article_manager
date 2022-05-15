<template>
  <div class="log-container">
    <div class="log-wrap">
      <div class="log-title">
        <h1>登录</h1>
      </div>
      <div class="form-wrap">
        <my-form :model="form">
          <my-form-item label="用户名">
            <my-input v-model="form.username" type="text" placeholder="请输入用户姓名"></my-input>
          </my-form-item>
          <my-form-item label="密码">
            <my-input v-model="form.password" type="password" placeholder="请输入密码"></my-input>
          </my-form-item>
          <my-form-item class="item-button">
            <my-button type="primary" size="medium" @click="handleLogin">登录</my-button>
          </my-form-item>
        </my-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/libs/api/user.js'
import { setItem } from '@/utils/localStorage.js'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin() {
      const { data: res } = await login(this.form)
      if (res.status !== 0) return alert('用户名或密码错误，请重新登录')
      setItem('token', res.token)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.log-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #bbb;
  background-image: url(../../assets/images/loginBg.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    margin: 0;
    font-size: 30px;
    font-weight: normal;
    color: #fff;
    font-family: fangsong;
    letter-spacing: 10px;
  }

  .log-wrap {
    width: 350px;
    height: 250px;
    margin: 300px auto 0;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 2px 3px rgba(#333, 0.5);

    .log-title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: rgb(72, 105, 209);
      text-align: center;
      margin-bottom: 20px;
    }

    .form-wrap {
      .my-form-item {
        margin: 10px auto;
      }

      .item-button {
        justify-content: end;
      }
    }
  }
}
</style>
