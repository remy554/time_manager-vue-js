/* Vuex Authentication module */

import AuthenticationService from '../services/authentication-service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { signedIn: true }, user }
  : { status: { signedOut: false }, user: null }

export const auth = {
  state: initialState,
  actions: {
    signin ({ commit }, user) {
      return AuthenticationService.signin(user).then(
        user => {
          commit('signinSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('signinFailure')
          return Promise.reject(error)
        }
      )
    },
    signout ({ commit }) {
      AuthenticationService.signout()
      commit('signedOut')
    },
    signup ({ commit }, user) {
      return AuthenticationService.signup(user).then(
        response => {
          commit('signupSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('signupFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    signinSuccess (state, user) {
      state.status.signedIn = true
      state.user = user
      console.log('signinSucess mutation user value : ' + state.user)
    },
    signinFailure (state) {
      state.status.signedIn = false
      state.user = null
    },
    signedOut (state) {
      state.status.signedIn = false
      state.user = null
    },
    signupSuccess (state, user) {
      state.status.signedIn = false
      state.user = user
      console.log('signupSuccess mutation user value : ' + state.user)
    },
    signupFailure (state) {
      state.status.signedIn = false
    }
  }
}
