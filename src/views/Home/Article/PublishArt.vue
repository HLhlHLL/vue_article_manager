<template>
  <div class="publish-art">
    <my-card>
      <template #title>
        <span>发布文章</span>
      </template>
      <my-input v-model="article.title" type="text" placeholder="请输入文章标题"></my-input>
      <div class="cover-img">
        <span>*请选择文章封面*</span>
        <my-upload :maxSize="1024 * 50" @fileToUpload="fileToUpload"></my-upload>
      </div>
      <div class="editor-wrap">
        <vue-editor v-model="article.content" />
      </div>
      <div class="button-wrap">
        <my-button type="primary" @click="publishArticle">发布</my-button>
        <my-button @click="resetArticle">重置</my-button>
      </div>
    </my-card>
  </div>
</template>

<script>
export default {
  name: 'PublishArt',
  data() {
    return {
      article: {
        title: '',
        content: '',
        cover_img: null,
        cate_id: 4,
        author_id: 4,
        state: '草稿'
      }
    }
  },
  methods: {
    fileToUpload(file) {
      console.log(file)
      this.article.cover_img = file
    },
    async publishArticle() {
      try {
        const res = await this.$store.dispatch('publishArticle', this.article)
        alert(res)
      } catch (error) {
        alert(error.message)
      }
    },
    resetArticle() {}
  }
}
</script>

<style lang="scss" scoped>
.publish-art {
  .my-input-wrap {
    margin-top: 10px;
    width: 300px;
  }

  .cover-img {
    span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      margin: 10px 0;
    }
  }

  .button-wrap {
    .my-button {
      margin-right: 10px;
    }
  }

  .editor-wrap {
    margin: 10px 0;
  }
}
</style>
