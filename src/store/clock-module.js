/* Vuex Clocking module */

import ClockManagerService from '../services/clock-manager-service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { clockedIn: false } }
  : { status: { clockedOut: false } }

export const clock = {
  state: initialState,
  actions: {
    clock ({ commit }) {
      return ClockManagerService.clock().then(
        response => {
          if (response.data.clock) {
            commit('clockInSuccess')
            return Promise.resolve(response.data)
          } else {
            if (response.data.workingtime) {
              commit('clockOutSuccess')
              return Promise.resolve(response.data)
            } else {
              // case where the working time is not returned because the clock out can't be validated by the API

            }
          }
        },
        error => {
          commit('clockFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    clockInSuccess (state) {
      state.status.clockedIn = true
      state.status.clockedOut = false
    },
    clockOutSuccess (state) {
      state.status.clockedOut = true
      state.status.clockedIn = false
    },
    clockFailure (state) {
      // change nothing
    }
  }
}
