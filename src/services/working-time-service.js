/* Service responsible for displaying, creating, modifying and deleting a working time */

import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/users/'

class WorkingTimeService {
  createWorkingTime (user) {
    return axios
      .post(API_URL + 'sign_in', {}, { headers: authHeader() })
      .then(response => {
        if (response.data.jwt) {
          localStorage.setItem('user', JSON.stringify(response.data))
          // this.$cookies.set('userToken', response.data.jwt)
        }
        return response.data
      })
  }
}

export default new WorkingTimeService()
