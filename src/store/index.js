import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './authentication-module'
import { clock } from './clock-module'
import users from './users-module'
import { teams } from './team-module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    clock,
    users,
    teams
  }
})
