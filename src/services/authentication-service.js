/* Service responsible for handling the authentication requests to the API with axios ans saving the JWT to the local storage */

import axios from 'axios'

const API_URL = 'http://localhost:4000/api/users/'

class AuthenticationService {
  signin (user) {
    return axios
      .post(API_URL + 'sign_in', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  signout () {
    localStorage.removeItem('user')
  }

  signup (user) {
    return axios.post(API_URL + 'sign_up', {
      username: user.username,
      email: user.email,
      password: user.password
    })
  }
}

export default new AuthenticationService()
