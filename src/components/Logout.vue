<template>
  <div class="buttonTitle">
    <h2 >Disconnect from your account</h2>
      <div class="form-group">
        <button class="myButton" href @click.prevent="logOut" :disabled="loading">
          <span v-show="loading"></span>
          <span>Logout</span>
        </button>
      </div>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}
      </div>
  </div>
</template>

<script>

export default {

  name: 'Logout',
  data () {
    return {
      loading: false,
      message: '',
      successful: false
    }
  },
  methods: {
    logOut: function (event) {
      this.$store.dispatch('signout').then(
        data => {
          this.$cookies.remove('jwt')
          this.message = data.message
          this.successful = true
          this.$router.push({ name: 'login' })
        },
        error => {
          console.log('then dispatch logout error')
          this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString()
          this.successful = false
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
