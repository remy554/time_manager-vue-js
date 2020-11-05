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
}

export default new UserService()
