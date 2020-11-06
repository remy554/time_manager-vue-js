<template>
  <div class="container">
    <h3> User Dashboard </h3>
    <ClockManager/>
    <ChartManager/>
  </div>
</template>

<script>
// import UserService from '../../services/user-service'
import ClockManager from '../ClockManager.vue'
import ChartManager from '../ChartManager'
export default {
  name: 'UserDashboard',
  components: {
    ClockManager,
    ChartManager
  }
}
</script>
