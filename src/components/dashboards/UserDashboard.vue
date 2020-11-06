<template>
  <div class="container">
    <h3> User Dashboard </h3>
    <ClockManager/>
    <ChartManager/>
    <CreateTeam/>
    <UsersOfTeam/>
  </div>
</template>

<script>
// import UserService from '../../services/user-service'
import ClockManager from '../ClockManager.vue'
import ChartManager from '../ChartManager'
import UsersOfTeam from '../UsersOfTeam'
import CreateTeam from '../CreateTeam'
export default {
  name: 'UserDashboard',
  components: {
    ClockManager,
    ChartManager,
    UsersOfTeam,
    CreateTeam
  }
}
</script>
