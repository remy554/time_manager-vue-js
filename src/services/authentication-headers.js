/* Authorization headers with the user token */
import Vue from 'vue'
export default function authHeader () {
  // const jwt = JSON.parse(localStorage.getItem('jwt'))
  const jwt = Vue.$cookies.get('jwt') // can't access this from this scope

  if (jwt) {
    return { Authorization: 'Bearer ' + jwt }
  } else {
    return {}
  }
}
