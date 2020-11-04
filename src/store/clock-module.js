/* Vuex Clocking module */

import ClockManagerService from '../services/clock-manager-service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { clockedIn: true } }
  : { status: { clockedOut: false } }

export const clock = {
  state: initialState,
  actions: {
    clock ({ commit }) {
      return ClockManagerService.clock().then(
        response => {
          commit('clockSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('clockFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    clockSuccess (state) {
      state.status.clockedIn = true
    },
    clockFailure (state) {
      state.status.clockedIn = false
    }
  }
}
