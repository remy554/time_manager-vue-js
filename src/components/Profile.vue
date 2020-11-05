<template>
  <div class="container">
    <header class="jumbotron">
      <h2> Your Profile </h2>
      <!-- <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3> -->
    </header>
    <!-- <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Roles:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul> -->

    <Logout/>

  </div>
</template>

<script>
import Logout from './Logout.vue'
export default {
  name: 'Profile',
  computed: {
    // currentUser () {
    //   return this.$store.state.auth.user
    // }
  },
  mounted () {
    // if (!this.currentUser) {
    //   this.$router.push('/login') // if user is not connected, redirect to login page
    // }
  },
  components: {
    Logout
  }
}
</script>
