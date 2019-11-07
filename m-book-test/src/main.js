import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import loadingImg from './images/loading.gif'
import './font/iconfont.css'
import './index.css'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: loadingImg,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
