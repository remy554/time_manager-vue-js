<template>
  <div>
    <label>Account deletion</label>
      <div class="form-group">
        <button href @click.prevent="deleteUser" :disabled="loading">
          <span v-show="loading"></span>
          <span>Delete my account</span>
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
// import {
//   mapActions
// } from 'vuex'
export default {

  name: 'DeleteAccount',
  data () {
    return {
      loading: false,
      message: '',
      successful: false
    }
  },
  methods: {
    // ...mapActions(['deleteUser'])
    deleteUser () {
      this.$store.dispatch('deleteUser').then(
        data => {
          this.$router.push({ name: 'login' })
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
