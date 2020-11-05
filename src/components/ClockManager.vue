<template>
  <div>
    <label>Report your arrival/departure time</label>
      <div class="form-group">
        <button v-on:click="clock">
          <span v-show="loading"></span>
          <span>Clock In</span>
        </button>
      </div>
  </div>
</template>

<script>

export default {

  name: 'ClockManager',
  data () {
    return {
      loading: false,
      message: '',
      startDateTime: null,
      clockIn: false
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn // get auth status from Vuex store
    }
  },
  methods: {
    clock: function (event) {
      this.$store.dispatch('clock', this.user).then(
        data => {
          this.message = data.message
          this.successful = true
        },
        error => {
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
