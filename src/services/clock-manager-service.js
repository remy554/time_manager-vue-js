/* Service responsible for clock in and clock out */
import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/clocks/'

class ClockManagerService {
  clock () {
    // const id = JSON.parse(localStorage.getItem('user')).id
    const userId = { userID: JSON.parse(localStorage.getItem('user')).id }
    // console.log('user id from storage : ' + id)
    return axios
      .post(API_URL, { headers: authHeader() }, { params: userId })
      .then(response => {
        return response.data
      })
  }
}

export default new ClockManagerService()
