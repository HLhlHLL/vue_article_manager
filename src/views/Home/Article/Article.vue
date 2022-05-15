<template>
  <div class="article">
    <my-card>
      <template #title>
        <div class="card-title">
          <span>文章列表</span>
          <div class="select-warp">
            <my-selector
              placeholder="请选择"
              reset
              :data="selections"
              @changeSelection="changeSelection"
            ></my-selector>
            <my-button type="primary" @click="siftArticle">筛选</my-button>
          </div>
        </div>
      </template>
      <my-table
        :data="articlelist"
        :thead="['文章标题', '分类', '发布时间', '状态', '操作']"
        :prop="['title', 'cate', 'pub_date', 'state', 'custom']"
        center
      >
        <template #custom>
          <my-button type="warning" size="mini" icon="icon-edit"></my-button>
          <my-button type="danger" size="mini" icon="icon-delete"></my-button>
        </template>
      </my-table>
      <my-pagination
        :total="total"
        :currentPage="queryinfo.pageNum"
        :pageSize="queryinfo.pageSize"
        :range="range"
        @getCurrentPage="getCurrentPage"
      ></my-pagination>
    </my-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Article',
  computed: {
    ...mapState({
      articlelist: (state) => state.articlelist,
      total: (state) => state.total
    })
  },
  mounted() {
    this.getArticlePageList()
  },
  data() {
    return {
      queryinfo: {
        pageNum: 1,
        pageSize: 3,
        state: ''
      },
      range: 5,
      selections: [
        { value: '草稿', label: '草稿' },
        { value: '已发布', label: '已发布' }
      ]
    }
  },
  methods: {
    getArticlePageList() {
      try {
        this.$store.dispatch('getArticlePageList', this.queryinfo)
      } catch (error) {
        alert(error.message)
      }
    },
    getCurrentPage(page) {
      this.queryinfo.pageNum = page
      this.getArticlePageList()
    },
    changeSelection(value) {
      this.queryinfo.state = value
    },
    siftArticle() {
      this.queryinfo.pageNum = 1
      this.getArticlePageList()
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  .card-title {
    display: flex;
    justify-content: space-between;

    span {
      line-height: 40px;
    }

    .select-warp {
      display: flex;
    }
  }
}
</style>
