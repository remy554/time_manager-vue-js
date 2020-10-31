<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!currentUser" to="/register">Sign Up</router-link> |
      <router-link v-if="!currentUser" to="/login">Login</router-link>

    </div>
    <router-view/>

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

    <!-- <div class="container">
      <router-view />
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'App',
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
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
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
</style>
