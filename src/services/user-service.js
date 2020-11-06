import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/users/'

class UserService {
  // getPublicContent () {
  //   return axios.get(API_URL + 'users')
  // }

  // getUserDashboard () {
  //   return axios.get(API_URL + 'user', { headers: authHeader() })
  // }

  // getManagerDashboard () {
  //   return axios.get(API_URL + 'manager', { headers: authHeader() })
  // }

  // getGeneralManagerDashboard () {
  //   return axios.get(API_URL + 'generalManager', { headers: authHeader() })
  // }

  deleteUser () {
    return axios
      .delete(API_URL + JSON.parse(localStorage.getItem('user')).id, { headers: authHeader() }, null)
      .then(response => {
        return response
      })
  }

  putUserIntoTeam (user, teamId) {
    const jsonBody = {
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password,
        team_id: teamId
      }
    }

    return axios
      .put(API_URL + JSON.parse(localStorage.getItem('user')).id, jsonBody, { headers: authHeader() }, null)
      .then(response => {
        return response
      })
  }

  // getUsersOfTeam (usersIds) {
  //   var usersOfTeam = []
  //   usersIds.forEach(
  //     axios.get(API_URL + JSON.parse(localStorage.getItem('user')).id, { headers: authHeader() }, null)
  //       .then(response => {
  //       // return response
  //         usersOfTeam.push(response.data.user)
  //       })
  //   )
  // }
}

export default new UserService()
