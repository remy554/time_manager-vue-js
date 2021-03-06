import axios from 'axios'
import authHeader from '../services/authentication-headers'
import UserService from '../services/user-service'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { signedIn: true }, user }
  : { status: { signedOut: false }, user: null }

const getters = {
  usersList: state => state.users
}

const actions = {
  async getUsers ({ commit }) {
    const response = await axios.get('http://localhost:4000/api/users', { headers: authHeader() })
    commit('getUsers', response.data)
  },

  async getUser ({ commit }, id) {
    const response = await axios.get(`http://localhost:4000/api/users/${id}`, { headers: authHeader() })
    commit('getUser', response.data)
  },

  async createUser ({ commit }, user) {
    const response = await axios.post('http://localhost:4000/api/users', user, { headers: authHeader() })
    commit('createUser', response.data)
  },
  async deleteUserFromList ({ commit }, id) {
    await axios.delete(`http://localhost:4000/api/users/${id}`, { headers: authHeader() })
    commit('deleteUser', id)
  },

  // API call made in user service for less coupling
  deleteUser ({ commit }) {
    UserService.deleteUser()
    commit('signedOut')
  }

}

const mutations = {
  getUsers: (state, users) => (
    state.users = users
  ),
  getUser: (state, id) => (
    state.users.filter(user => user.id !== id)
  ),
  createUser: (state, user) => state.users.unshift(user),
  deleteUser: (state, id) => (
    state.users.filter(user => user.id !== id)
    // state.users.splice(user => user.id, 1)
  ),
  signedOut (state) {
    state.status.signedIn = false
    state.user = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
