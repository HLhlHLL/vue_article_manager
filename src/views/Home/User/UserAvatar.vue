<template>
  <div class="user-avatar">
    <my-card>
      <template #title> 更换头像 </template>
      <my-upload :maxSize="1024 * 50" @fileToUpload="fileToUpload"></my-upload>
      <my-button type="primary" @click="submitAvatar">提交</my-button>
    </my-card>
  </div>
</template>

<script>
import { getDataURL } from '@/libs/my-ui/utils'
import { updateAvatar } from '@/libs/api/user.js'

export default {
  name: 'UserAvatar',
  data() {
    return {
      file: null
    }
  },
  methods: {
    fileToUpload(file) {
      getDataURL(file, (res) => {
        this.file = res
      })
    },
    async submitAvatar() {
      if (this.file === null) return alert('请选择头像！')
      const { data: res } = await updateAvatar(this.file)
      if (res.status !== 0) return alert('更换头像失败！')
      this.$store.dispatch('getInfo')
      alert(res.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-button {
  margin: 10px;
}
</style>
