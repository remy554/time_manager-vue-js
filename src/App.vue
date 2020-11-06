<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Sign Up</router-link> |
      <router-link to="/login">Login</router-link>

    </div>
    <router-view/>

    <!-- <VueMorris/> -->

    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <!-- <a href class="navbar-brand" @click.prevent>TimeManager</a> -->
      <div class="navbar-nav mr-auto">
        <li v-if="showGeneralManagerDashboard" class="nav-item">
          <router-link to="/generalManager" class="nav-link">General Manager Dashboard</router-link>
        </li>
        <li v-if="showManagerDashboard" class="nav-item">
          <router-link to="/manager" class="nav-link">Manager Dashboard</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li> -->
      </div>

      <!-- <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            LogOut
          </a>
        </li>
      </div> -->
    </nav>
  </div>
</template>

<script>
// import VueMorris from './components/VueMorris'

export default {
  name: 'App',
  components: {
    // VueMorris
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    showGeneralManagerDashboard () {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_GENERAL_MANAGER')
      }

      return false
    },
    showManagerDashboard () {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MANAGER')
      }

      return false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.myButton {
    box-shadow: 0px 10px 14px -7px #276873;
    background-color:#0593ff;
    border-radius:8px;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:20px;
    font-weight:bold;
    padding:13px 32px;
    text-decoration:none;
    text-shadow:0px 1px 0px #3d768a;
    margin:1em;
}
.myButton:hover {
    background-color:#408c99;
}
.myButton:active {
    position:relative;
    top:1px;
}

.form-group{
  margin: 0em 0em 2em 0em;
}

.buttonTitle{
  background:gray;
  padding:1em;
  color:white;
  margin:2em;
}

</style>
