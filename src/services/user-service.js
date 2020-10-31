import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/'

class UserService {
  getPublicContent () {
    return axios.get(API_URL + 'users')
  }

  getUserDashboard () {
    return axios.get(API_URL + 'user', { headers: authHeader() })
  }

  getManagerDashboard () {
    return axios.get(API_URL + 'manager', { headers: authHeader() })
  }

  getGeneralManagerDashboard () {
    return axios.get(API_URL + 'generalManager', { headers: authHeader() })
  }
}

export default new UserService()
