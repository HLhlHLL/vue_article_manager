import { getUserInfo, editUserInfo } from '@/libs/api/user.js'
import { getArtCateList, addArtCate, updateArtCate, deleteArtCate } from '@/libs/api/artcate.js'
import { getArticleList, getArticlePageList, publishArticle } from '@/libs/api/article'

export default {
  // 获取用户信息
  async getUserInfo({ commit }) {
    const { data: res } = await getUserInfo()
    if (res.status !== 0) {
      return Promise.reject(new Error('获取用户信息失败！'))
    }
    commit('GETINFO', res.data)
    return Promise.resolve('获取用户信息成功！')
  },
  // 修改用户信息
  async editUserInfo({ commit }, data) {
    const { data: res } = await editUserInfo(data)
    if (res.status !== 0) {
      return Promise.reject(new Error('修改用户信息失败！'))
    }
    return Promise.resolve('修改用户信息成功！')
  },
  // 获取文章分类列表
  async getArtCateList({ commit }) {
    const { data: res } = await getArtCateList()
    if (res.status !== 0) {
      return Promise.reject(new Error('获取分类列表失败失败！'))
    }
    commit('GETARTCATELIST', res.data)
    return Promise.resolve('获取文章分类列表成功！')
  },
  // 添加文章分类
  async addArtCate({ commit }, data) {
    const { data: res } = await addArtCate(data)
    if (res.status !== 0) {
      return Promise.reject(new Error('添加分类失败！'))
    }
    return Promise.resolve('添加分类成功！')
  },
  // 更新文章分类
  async updateArtCate({ commit }, data) {
    const { data: res } = await updateArtCate(data)
    if (res.status !== 0) {
      return Promise.reject(new Error('修改分类失败！'))
    }
    return Promise.resolve('修改分类成功！')
  },
  // 删除文章分类
  async deleteArtCate({ commit }, id) {
    const { data: res } = await deleteArtCate(id)
    if (res.status !== 0) {
      return Promise.reject(new Error('删除分类失败！'))
    }
    return Promise.resolve('删除分类成功！')
  },
  // 获取文章列表
  async getArticleList({ commit }) {
    const { data: res } = await getArticleList()
    if (res.status !== 0) {
      return Promise.reject(new Error('获取文章列表失败！'))
    }
    commit('GETARTICLELIST', res.data)
    return Promise.resolve('获取文章列表成功！')
  },
  // 获取文章分页列表
  async getArticlePageList({ commit }, data) {
    const { data: res } = await getArticlePageList(data)
    if (res.status !== 0) {
      return Promise.reject(new Error('获取文章列表失败！'))
    }
    commit('GETARTICLEPAGELIST', res.data)
    return Promise.resolve('获取文章列表成功！')
  },
  // 发布文章
  async publishArticle({ commit }, data) {
    const { data: res } = await publishArticle(data)
    console.log(res)
    if (res.status !== 0) {
      return Promise.reject(new Error('发布失败！'))
    }
    return Promise.resolve('发布成功！')
  }
}
