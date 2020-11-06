/* Vuex Clocking module */

import TeamService from '../services/team-service'

// const user = JSON.parse(localStorage.getItem('user'))
const initialState = false

export const teams = {
  state: initialState,
  actions: {
    getUserTeam ({ commit }) {
      return TeamService.getUserTeam().then(
        response => {
          commit('teamSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('teamError')
          return Promise.reject(error)
        }
      )
    },
    getAllTeams ({ commit }) {
      return TeamService.getAllTeams().then(
        response => {
          commit('teamSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('teamError')
          return Promise.reject(error)
        }
      )
    },

    createTeam ({ commit }, teamName) {
      return TeamService.createTeam(teamName).then(
        response => {
          commit('teamSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('teamError')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    teamSuccess (state) {
      state = true
    },
    teamError (state) {
      state = false
    }
  }
}
