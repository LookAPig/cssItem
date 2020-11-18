import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Three from 'three'
import './registerServiceWorker'
import Api from './api/request'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.prototype.$api = Api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
