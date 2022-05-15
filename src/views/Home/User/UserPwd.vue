<template>
  <div class="user-pwd">
    <my-card>
      <template #title>
        <span>重置密码</span>
      </template>
      <my-form :data="formData" :rule="rules" ref="ruleForm">
        <my-form-item label="原密码" prop="password">
          <my-input
            v-model="formData.password"
            type="text"
            placeholder="请输入原密码"
            @isValidated="isValidated"
          ></my-input>
        </my-form-item>
        <my-form-item label="新密码" prop="newPwd">
          <my-input
            v-model="formData.newPwd"
            type="text"
            placeholder="请输入新密码"
            @isValidated="isValidated"
          ></my-input>
        </my-form-item>
        <my-form-item label="确认密码" prop="rePwd">
          <my-input
            v-model="formData.rePwd"
            type="text"
            placeholder="请确认密码"
            @isValidated="isValidated"
          ></my-input>
        </my-form-item>
        <my-form-item class="item-button">
          <my-button type="primary" size="medium" @click="updatePwd">确认修改</my-button>
          <my-button size="medium" @click="resetPwd">重置</my-button>
        </my-form-item>
      </my-form>
    </my-card>
  </div>
</template>

<script>
import { updatePassword } from '@/libs/api/user.js'

export default {
  name: 'UserPwd',
  data() {
    // 自定义校验规则
    const validateRePwd = (curValue, success, fail) => {
      if (this.formData.newPwd !== curValue) {
        fail(new Error('两次密码不一致！'))
      } else {
        success()
      }
    }
    return {
      formData: {
        password: '',
        newPwd: '',
        rePwd: ''
      },
      rules: {
        password: [
          { required: true, message: '请输入密码' },
          { minLen: 6, maxLen: 10, message: '密码长度在 6 ~ 10 位' }
        ],
        newPwd: [
          { required: true, message: '请输入新密码' },
          { minLen: 6, maxLen: 10, message: '密码长度在 6 ~ 10 位' }
        ],
        rePwd: [{ validator: validateRePwd }]
      },
      validator: {
        password: false,
        newPwd: false,
        rePwd: false
      }
    }
  },
  methods: {
    isValidated(name, validated) {
      this.validator[name] = validated
    },
    async updatePwd() {
      const validate = Object.values(this.validator).every((item) => item)
      if (validate) {
        const { password, newPwd } = this.formData
        const { data: res } = await updatePassword(password, newPwd)
        if (res.status !== 0) return alert('修改失败！')
        alert(res.message)
      }
    },
    resetPwd() {
      // Object.assign(this.$data, this.$options.data())
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.user-pwd {
  .item-button {
    justify-content: flex-end;
  }
}
</style>
