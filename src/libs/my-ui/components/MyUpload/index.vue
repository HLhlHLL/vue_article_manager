<template>
  <div class="my-upload">
    <div class="upload-wrap" @click="handleSelectFile" v-show="showUpload">
      <i class="iconfont icon-plus"></i>
      <input ref="ipt" class="upload" type="file" @change="handleFileChange" />
    </div>
    <div
      class="img-wrap"
      v-show="!showUpload"
      @mouseenter="maskVisible = true"
      @mouseleave="maskVisible = false"
    >
      <div class="mask" v-show="maskVisible">
        <i class="iconfont icon-preview" @click="modalVisible = true"></i>
        <i class="iconfont icon-delete" @click="removePreImg"></i>
      </div>
      <img class="pre-img" :src="imgURL" />
    </div>
    <my-modal :modalVisible="modalVisible" @closeModal="closeModal">
      <img :src="imgURL" />
    </my-modal>
  </div>
</template>

<script>
import { getObjectURL } from '@/libs/my-ui/utils'

export default {
  name: 'MyUpload',
  emits: ['fileToUpload'],
  props: {
    maxSize: {
      type: Number,
      default: 1024 * 100
    }
  },
  data() {
    return {
      imgURL: '',
      showUpload: true,
      modalVisible: false,
      maskVisible: false
    }
  },
  methods: {
    handleFileChange(e) {
      const file = e.target.files[0]
      this.file = file
      if (file.size > this.maxSize) return alert(`图片大小不能超过${this.maxSize / 1024}K`)
      const url = getObjectURL(file)
      this.imgURL = url
      this.showUpload = false
      this.$emit('fileToUpload', file)
    },
    handleSelectFile() {
      this.$refs.ipt.click()
    },
    closeModal() {
      this.modalVisible = false
    },
    removePreImg() {
      Object.assign(this.$data, this.$options.data())
      this.$refs.ipt.value = null
    }
  }
}
</script>

<style lang="scss" scoped>
.my-upload {
  position: relative;

  .upload-wrap {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 10px;
    background-color: #fff;
    border: 2px dotted #bbb;
    border-radius: 5px;
    cursor: pointer;

    .icon-plus {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #bbb;
    }

    .upload {
      display: none;
    }
  }

  .img-wrap {
    width: 170px;
    height: 170px;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 150px;
      height: 150px;
      margin: 10px;
      background-color: rgba($color: #eee, $alpha: 0.5);
      z-index: 2;

      .icon-preview,
      .icon-delete {
        position: inherit;
        top: 67px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
      }

      .icon-preview {
        left: 50px;
      }

      .icon-delete {
        right: 50px;
      }
    }

    .pre-img {
      width: 150px;
      height: 150px;
      margin: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
