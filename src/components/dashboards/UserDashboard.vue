<template>
  <div class="container">
    <h3> User Dashboard </h3>
    <ClockManager/>
  </div>
</template>

<script>
// import UserService from '../../services/user-service'
import ClockManager from '../ClockManager.vue'

export default {
  name: 'UserDashboard',
  components: {
    ClockManager
  }
}
</script>
