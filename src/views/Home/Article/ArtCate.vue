<template>
  <div class="art-cate">
    <my-card>
      <template #title>
        <div class="card-title">
          <span>文章类别管理</span>
          <my-button type="primary" @click="addArtCate(1)">添加文章分类</my-button>
        </div>
      </template>
      <my-table
        :data="artcatelist"
        :thead="['分类名称', '分类别名', '操作']"
        :prop="['name', 'alias', 'custom']"
        :width="[2, 2, 1]"
        center
      >
        <template #custom="{ scope }">
          <my-button
            type="warning"
            size="mini"
            icon="icon-edit"
            @click="addArtCate(2, scope)"
          ></my-button>
          <my-button
            type="danger"
            size="mini"
            icon="icon-delete"
            @click="deleteArtCate(scope.id)"
          ></my-button>
        </template>
      </my-table>

      <!-- 添加分类 -->
      <my-modal width="400" height="400" :modalVisible="modalVisible" @closeModal="closeModal">
        <div class="form-title">
          <span>{{ text + '文章分类' }}</span>
        </div>
        <div class="form-wrap">
          <my-form :data="addForm" ref="addFormRef">
            <my-form-item label="分类名称">
              <my-input v-model="addForm.name" type="text" placeholder="请输入分类名称" />
            </my-form-item>
            <my-form-item label="分类别名">
              <my-input v-model="addForm.alias" type="text" placeholder="请输入分类别名" />
            </my-form-item>
            <my-form-item>
              <my-button type="primary" size="medium" @click="submitAddCate(text)">
                {{ '确认' + text }}
              </my-button>
              <my-button size="medium" @click="cancelSubmit()">{{ '取消' + text }}</my-button>
            </my-form-item>
          </my-form>
        </div>
      </my-modal>
    </my-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ArtCate',
  computed: {
    ...mapState({
      artcatelist: (state) => state.artcatelist.filter((item) => item.is_delete === 0)
    })
  },
  mounted() {
    try {
      this.$store.dispatch('getArtCateList')
    } catch (error) {
      alert(error.message)
    }
  },
  data() {
    return {
      modalVisible: false,
      addForm: {
        name: '',
        alias: ''
      },
      text: ''
    }
  },
  methods: {
    addArtCate(type, data) {
      this.modalVisible = true
      switch (type) {
        case 1:
          this.text = '添加'
          break
        case 2:
          this.text = '修改'
          this.addForm = data
          break
      }
    },
    closeModal() {
      this.$refs.addFormRef.resetFields()
      this.modalVisible = false
    },
    async submitAddCate(text) {
      try {
        switch (text) {
          case '添加':
            {
              if (this.addForm.name.trim().length === 0 || this.addForm.alias.trim().length === 0) {
                return alert('名称或别名不能为空！')
              }
              const res = await this.$store.dispatch('addArtCate', this.addForm)
              alert(res)
              this.$store.dispatch('getArtCateList')
              this.$refs.addFormRef.resetFields()
              this.modalVisible = false
            }
            break
          case '修改':
            {
              if (this.addForm.name.trim().length === 0 || this.addForm.alias.trim().length === 0) {
                return alert('名称或别名不能为空！')
              }
              const res = await this.$store.dispatch('updateArtCate', this.addForm)
              alert(res)
              this.$store.dispatch('getArtCateList')
              this.$refs.addFormRef.resetFields()
              this.modalVisible = false
            }
            break

          default:
            break
        }
      } catch (error) {
        alert(error.message)
      }
    },
    cancelSubmit() {
      this.$refs.addFormRef.resetFields()
      this.modalVisible = false
    },
    async deleteArtCate(id) {
      try {
        const res = await this.$store.dispatch('deleteArtCate', id)
        alert(res)
        this.$store.dispatch('getArtCateList')
        this.$refs.addFormRef.resetFields()
        this.modalVisible = false
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.art-cate {
  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-title {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
  }

  .form-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .my-button {
      margin-right: 10px;
    }
  }
}
</style>
