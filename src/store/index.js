import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './authentication-module'
import { clock } from './clock-module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    clock
  }
})
