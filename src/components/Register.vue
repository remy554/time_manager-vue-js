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
            /><br>
            <span>{{ errors[0] }}</span>
        </ValidationProvider>

            <!-- <div
              v-if="submitted && errors.has('username')"
              class="alert-danger"
            >{{errors.first('username')}}</div> -->
          </div>
          <div class="form-group">
            <label for="email">Email</label>

          <ValidationProvider name="email" rules="required|email|max:50" v-slot="{ errors }">
            <input
              v-model="user.email"
              type="email"
              class="form-control"
            /><br>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

            <!-- <div
              v-if="submitted && errors.has('email')"
              class="alert-danger"
            >{{errors.first('email')}}</div> -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>

          <ValidationProvider name="password" rules="required|min:8|password:@passwordConfirm" v-slot="{ errors }">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
            /><br>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <label for="password">Confirm your password</label>

          <ValidationProvider name="passwordConfirm" rules="required" v-slot="{ errors }">
            <input
              v-model="confirmation"
              type="password"
              class="form-control"
            /><br>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

            <!-- <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password')}}</div> -->
          </div>
          <div class="form-group">
            <button class="myButton">Sign Up</button>
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
// import { bcrypt, saltRounds } from '../global-variables'

extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

export default {
  name: 'Register',
  data () {
    return {
      user: new User('', '', ''),
      confirmation: '',
      submitted: false,
      successful: false,
      message: '',
      data: '',
      error: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted () {
    if (this.loggedIn) {
      this.$router.push({ name: 'profile' }) // use the router vue to go the the profile page
    }
  },
  methods: {
    register () {
      // console.log('register()')
      this.message = ''
      this.submitted = true
      // var passwordToHash = this.user.password

      // Hash user password synchronously
      // var hashedPassword = bcrypt.hashSync(this.user.password, saltRounds)
      // this.user.password = hashedPassword
      console.log(this.user.password)

      this.$store.dispatch('signup', this.user).then(
        data => {
          console.log('then dispatch register data')
          this.$cookies.set('jwt', data.jwt, 30)
          console.log('cookie jwt :' + this.$cookies.get('jwt'))
          this.message = data.message
          this.successful = true
          this.$router.push({ name: 'profile' })
        },
        error => {
          console.log('then dispatch register error')
          this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString()
          this.successful = false
        }
      )

      // Hash user password asynchronously
      // Not used here because we need to be in the scope where "this" is available
      //
      // bcrypt.genSalt(saltRounds, function (err, salt) {
      //   if (err) {
      //     throw err
      //   } else {
      //     bcrypt.hash(passwordToHash, salt, function (err, hash) {
      //       if (err) {
      //         throw err
      //       } else {
      //         console.log(hash)
      //         this.$store.dispatch('signup', this.user).then(
      //           data => {
      //             this.message = data.message
      //             this.successful = true
      //           },
      //           error => {
      //             this.message =
      //           (error.response && error.response.data && error.response.data.message) ||
      //           error.message ||
      //           error.toString()
      //             this.successful = false
      //           }
      //         )
      //       }
      //     })
      //   }
      // })
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
