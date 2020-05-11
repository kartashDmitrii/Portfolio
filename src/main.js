import Vue from 'vue'
import App from './App.vue'
import store from './store'

import "@/assets/styles/_global.sass"

import router from './router'

import './multilang/ml'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
