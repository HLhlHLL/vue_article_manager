import axios from '@/utils/axios.js'

// 登录
const login = ({ username, password }) => {
  return axios({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

// 获取用户信息
const getUserInfo = () => {
  return axios({
    url: '/my/userinfo',
    method: 'GET'
  })
}

// 修改用户信息
const editUserInfo = (data) => {
  return axios({
    url: '/my/userinfo',
    method: 'POST',
    data
  })
}

// 修改密码
const updatePassword = (oldPwd, newPwd) => {
  return axios({
    url: '/my/update/password',
    method: 'POST',
    data: {
      oldPwd,
      newPwd
    }
  })
}

// 修改头像
const updateAvatar = (uerPic) => {
  return axios({
    url: '/my/update/avatar',
    method: 'POST',
    data: {
      avatar: uerPic
    }
  })
}

export { login, getUserInfo, editUserInfo, updatePassword, updateAvatar }
