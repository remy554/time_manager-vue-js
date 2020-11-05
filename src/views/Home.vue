<template>
  <div class="container">
    <h1> Time Manager Home </h1>
    <header class="jumbotron">
      <h3>{{content}}</h3>
      <!-- <h3> {{ userid }} </h3> -->
    </header>
  </div>
</template>

<script>
// import UserService from '../services/user-service'

export default {
  name: 'Home',
  data () {
    return {
      content: '',
      userid: ''
    }
  },
  mounted () {
    // this.userid = JSON.parse(localStorage.getItem('user')).id
    // UserService.getPublicContent().then(
    //   response => {
    //     this.content = response.data
    //   },
    //   error => {
    //     this.content =
    //       (error.response && error.response.data && error.response.data.message) ||
    //       error.message ||
    //       error.toString()
    //   }
    // )
  }
}
</script>
