/* Service responsible for handling the authentication requests to the API with axios ans saving the JWT to the local storage */

import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/users/'

class AuthenticationService {
  signin (user) {
    return axios
      .post(API_URL + 'sign_in', {
        username: user.username,
        password: user.password
      }, { headers: authHeader() })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  signout () {
    return axios
      .post(API_URL + 'sign_out', {})
      .then(response => {
        localStorage.removeItem('user')
        return response.data
      }, { headers: authHeader() })
  }

  signup (user) {
    return axios.post(API_URL + 'sign_up', {
      username: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password
    }, { headers: authHeader() })
  }
}

export default new AuthenticationService()
