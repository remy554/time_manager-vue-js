<template>
  <div class="col-md-12">
    <h1> Login </h1>

    <div class="card card-container">
      <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(login)">
        <div class="form-group">
          <label for="email">Email</label>

        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
          <input
            v-model="user.email"
            type="text"
            class="form-control"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

         <!-- <div
            v-if="errors.has('email')"
            class="alert alert-danger"
            role="alert"
          >Email is missing
        </div> -->

        </div>

        <div class="form-group">
          <label for="password">Password</label>

        <ValidationProvider name="password" rules="required" v-slot="{ errors }">
          <input
            v-model="user.password"
            type="password"
            class="form-control"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
<!--
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >Password is missing
          </div> -->

        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
    </ValidationObserver>
    </div>
  </div>
</template>

<script>
import User from '../models/user'
// import { bcrypt, saltRounds } from '../global-variables'

export default {

  name: 'Login',
  data () {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn // get auth status from Vuex store
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push({ name: 'profile' }) // go to the Profile page using the vue router
    }
  },
  methods: {
    login () {
      // if (!isValid) {
      //   this.loading = false
      //   return
      // }
      if (this.user.email && this.user.password) {
        // this.user.password = bcrypt.hashSync(this.user.password, saltRounds)
        this.$store.dispatch('signin', this.user).then(
          data => {
            this.$cookies.set('jwt', data.jwt, 30)
            this.$router.push({ name: 'profile' })
          },
          error => {
            this.loading = false
            this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString()
          }
        )
      }
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
