import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/jquery/dist/jquery.min.js'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

export const bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
