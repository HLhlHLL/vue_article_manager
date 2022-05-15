import axios from '@/utils/axios.js'

// 获取文章列表
const getArticleList = () => {
  return axios({
    url: '/my/article/articlelist',
    method: 'GET'
  })
}

// 获取文章分页数据
const getArticlePageList = (data) => {
  return axios({
    url: '/my/article/articlepage',
    method: 'POST',
    data
  })
}

// 发布文章
const publishArticle = (data) => {
  return axios({
    url: '/my/article/add',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}

export { getArticleList, getArticlePageList, publishArticle }
