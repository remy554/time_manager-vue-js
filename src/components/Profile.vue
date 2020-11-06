<template>
  <div class="container">
    <header class="jumbotron">
      <h2> Your Profile </h2>
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <!-- <p>
      <strong>Token:</strong>
      {{jwt.substring(0, 20)}} ... {{jwt.substr(jwt.length - 20)}}
    </p> -->
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <!-- <strong>Roles:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul> -->
    <UserDashboard/>
    <Logout/>
    <DeleteAccount/>

  </div>
</template>

<script>
import Logout from './Logout.vue'
import DeleteAccount from './DeleteAccount.vue'
import UserDashboard from './dashboards/UserDashboard.vue'

export default {
  name: 'Profile',
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.push('/login') // if user is not connected, redirect to login page
    }
  },
  components: {
    UserDashboard,
    Logout,
    DeleteAccount
  }
}
</script>
