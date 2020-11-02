import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

Vue.config.productionTip = false
// Vue.use(VeeValidate)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.use(VueCookie)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
