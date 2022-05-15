import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyUI from '@/libs/my-ui'
import Vue2Editor from 'vue2-editor'
import '@/assets/style/common.css'
import '@/assets/style/my-ui.css'
import '@/assets/fonts/iconfont.css'

Vue.use(Vue2Editor)

Vue.config.productionTip = false

Vue.use(MyUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
