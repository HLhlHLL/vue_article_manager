export default {
  // 获取用户信息
  GETINFO(state, userinfo) {
    state.userinfo = userinfo
  },
  // 获取文章分类列表
  GETARTCATELIST(state, artcatelist) {
    state.artcatelist = artcatelist
  },
  // 获取文章列表
  GETARTICLELIST(state, articlelist) {
    state.articlelist = articlelist
  },
  // 获取文章分页数据
  GETARTICLEPAGELIST(state, articlelist) {
    state.articlelist = articlelist
    state.total = articlelist[0].con
  }
}
