export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home'),
    children: [
      {
        path: 'userinfo',
        name: 'userinfo',
        component: () => import('../views/Home/User/UserInfo.vue')
      },
      {
        path: 'password',
        name: 'password',
        component: () => import('../views/Home/User/UserPwd.vue')
      },
      {
        path: 'avatar',
        name: 'avatar',
        component: () => import('../views/Home/User/UserAvatar.vue')
      },
      {
        path: 'artcate',
        name: 'artcate',
        component: () => import('../views/Home/Article/ArtCate.vue')
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('../views/Home/Article/Article.vue')
      },
      {
        path: 'publishArt',
        name: 'publishArt',
        component: () => import('../views/Home/Article/PublishArt.vue')
      }
    ]
  }
]
