<template>
  <div class="container">
    <header class="jumbotron">
      <!-- <h3>{{content}}</h3> -->
    </header>
    <ClockManager/>
  </div>
</template>

<script>
import UserService from '../../services/user-service'
import ClockManager from '../ClockManager.vue'

export default {
  name: 'User',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    UserService.getUserBoard().then(
      response => {
        this.content = response.data
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
      }
    )
  },
  components: {
    ClockManager
  }
}
</script>
