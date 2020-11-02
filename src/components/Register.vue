<template>
  <div class="col-md-12">
    <h1> Create an account </h1>
    <div class="card card-container">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(register)">
        <div v-if="!successful">

          <div class="form-group">
            <label for="username">Username</label>
        <ValidationProvider name="username" rules="required|min:2|max:42" v-slot="{ errors }">
            <input
              v-model="user.username"
              type="text"
              class="form-control"
            />
            <span>{{ errors[0] }}</span>
        </ValidationProvider>

            <div
              v-if="submitted && errors.has('username')"
              class="alert-danger"
            >{{errors.first('username')}}</div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>

          <ValidationProvider name="email" rules="required|email|max:50" v-slot="{ errors }">
            <input
              v-model="user.email"
              type="email"
              class="form-control"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

            <div
              v-if="submitted && errors.has('email')"
              class="alert-danger"
            >{{errors.first('email')}}</div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>

          <ValidationProvider name="password" rules="required|min:6|max:40" v-slot="{ errors }">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

            <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password')}}</div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
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
import User from '../models/user'
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

export default {
  name: 'Register',
  data () {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted () {
    if (this.loggedIn) {
      this.$router.push('/profile') // use the router vue to go the the profile page
    }
  },
  methods: {
    register () {
      this.message = ''
      this.submitted = true

      this.$store.dispatch('/register', this.user).then(
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
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
