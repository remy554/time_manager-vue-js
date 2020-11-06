<template>
  <div class="buttonTitle">
    <h2>Report your {{ textLabelClock }} time</h2>
      <div class="form-group">
        <button class="myButton" v-on:click="clock">
          <span v-show="loading"></span>
          <span>{{ buttonClock }}</span>
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
      clockIn: false,
      buttonClock: 'Clock In',
      textLabelClock: 'arrival'
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

          if (data.clock) {
            this.clockIn = true
            this.buttonClock = 'Clock Out'
            this.startDateTime = data.clock.time
            console.log('startDateTime: ' + this.startDateTime)
            this.textLabelClock = 'departure'
          } else {
            if (data.workingtime) {
              console.log('working time returned after clock out')
              this.clockIn = false
              this.startDateTime = null
              this.buttonClock = 'Clock In'
              this.textLabelClock = 'arrival'
            } else {
              // case where the working time is not returned because the clock out can't be validated by the API
            }
          }
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
