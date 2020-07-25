import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { sync } from 'vuex-router-sync'

import 'bootstrap'

Vue.config.productionTip = false

sync(store, router)

Vue.directive('focus', { 
  inserted: function (el) {
    el.focus()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
