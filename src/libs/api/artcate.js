import axios from '@/utils/axios.js'

// 获取文章分类列表
const getArtCateList = () => {
  return axios({
    url: '/my/article/cates',
    method: 'GET'
  })
}

// 添加文章分类
const addArtCate = (data) => {
  return axios({
    url: '/my/article/addcates',
    method: 'POST',
    data
  })
}

// 更新文章分类信息
const updateArtCate = (data) => {
  return axios({
    url: '/my/article/updatecate',
    method: 'POST',
    data
  })
}

// 删除文章分类信息
const deleteArtCate = (id) => {
  return axios({
    url: '/my/article/deletecates/' + id,
    method: 'GET'
  })
}

export { getArtCateList, addArtCate, updateArtCate, deleteArtCate }
