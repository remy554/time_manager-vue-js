<template>
  <div class="col-md-12">
    <h1> Create an account </h1>
    <div class="card card-container">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(createTeam)">
        <div v-if="!successful">

          <div class="form-group">
            <label for="teamName">Name of the team</label>
        <ValidationProvider name="teamName" rules="required|min:2|max:42" v-slot="{ errors }">
            <input
              v-model="teamNamevModel"
              type="text"
              class="form-control"
            /><br>
            <span>{{ errors[0] }}</span>
        </ValidationProvider>

          </div>
          <div class="form-group">
            <button class="myButton">Create Team</button>
          </div>
        </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
// import { bcrypt, saltRounds } from '../global-variables'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

export default {
  name: 'CreateTeam',
  data () {
    return {
      submitted: false,
      successful: false,
      message: '',
      data: '',
      error: '',
      teamNamevModel: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted () {

  },
  methods: {
    createTeam () {
      var value = this.teamNamevModel
      console.log('team name : ' + value)
      this.$store.dispatch('createTeam', value).then(
        data => {
          console.log('then dispatch create team')
        },
        error => {
          console.log('then dispatch error create team')
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
