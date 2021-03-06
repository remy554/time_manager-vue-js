/* Authorization headers with the user token */
// import Vue from 'vue'

export default function authHeader () {
  const jwt = JSON.parse(localStorage.getItem('jwt'))
  // const jwt = Vue.$cookies.get('jwt') // can't access this from this scope
  console.log('authHeader jwt : ' + jwt)

  if (jwt) {
    console.log('jwt not null')
    return { Authorization: 'Bearer ' + jwt }
  } else {
    console.log('jwt null')
    return {}
  }
}
