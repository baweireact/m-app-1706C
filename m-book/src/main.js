import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import loadingImg from './images/loading.gif'

Vue.config.productionTip = false

// or with options
Vue.use(VueLazyload, {
  loading: loadingImg
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
