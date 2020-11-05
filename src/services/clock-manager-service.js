/* Service responsible for clock in and clock out */
import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/clocks/'

class ClockManagerService {
  clock () {
    return axios
      .post(API_URL + JSON.parse(localStorage.getItem('user')).id, null, { headers: authHeader() })
      .then(response => {
        return response
      })
  }
}

export default new ClockManagerService()
