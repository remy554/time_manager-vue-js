/* Service responsible for handling the authentication requests to the API with axios ans saving the JWT to the local storage */

import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/users/'

class AuthenticationService {
  signin (user) {
    const jsonBody = {
      user: {
        username: user.username,
        password: user.password
      }
    }
    return axios
      .post(API_URL + 'sign_in', jsonBody, { headers: authHeader() })
      .then(response => {
        if (response.data.jwt) {
          localStorage.setItem('user', JSON.stringify(response.data))
          this.$cookies.set('userToken', response.data.jwt)
        }
        return response.data
      })
  }

  signout () {
    return axios
      .post(API_URL + 'sign_out', {})
      .then(response => {
        localStorage.removeItem('user')
        this.$cookies.set('userToken', null)
        return response.data
      }, { headers: authHeader() })
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
          console.log(response.data.jwt)
          localStorage.setItem('user', JSON.stringify(response.data))
          this.$cookies.set('userToken', response.data.jwt, 30)
          console.log('Token cookie : ' + this.$cookies.get('userToken'))
        }
        return response.data
      })
  }
}

export default new AuthenticationService()
