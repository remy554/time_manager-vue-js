/* Service responsible for handling the authentication requests to the API with axios ans saving the JWT to the local storage */

import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/users/'

class AuthenticationService {
  signin (user) {
    const jsonBody = {
      user: {
        email: user.email,
        password: user.password
      }
    }
    return axios
      .post(API_URL + 'sign_in', jsonBody, { headers: authHeader() })
      .then(response => {
        if (response.data.jwt) {
          console.log(response.data.user)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          console.log(response.data.jwt)
          localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
        }
        return response
      })
  }

  signout () {
    return axios
      .post(API_URL + 'sign_out', { headers: authHeader() })
      .then(response => {
        localStorage.removeItem('user')
        localStorage.removeItem('jwt')
        return response
      })
  }

  signup (user) {
    console.log('sign_up request started')

    const jsonBody = {
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password
      }
    }
    return axios.post(API_URL + 'sign_up', jsonBody, { headers: authHeader() })
      .then(response => {
        console.log('sign_up request response')
        console.log(response)
        if (response.data.jwt) {
          console.log(response.data.user)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          console.log(response.data.jwt)
          localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
        }
        return response
      })
  }
}

export default new AuthenticationService()
