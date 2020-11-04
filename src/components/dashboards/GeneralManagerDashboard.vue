<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>

    <SelectUser />
    <AddUser />
    <UserList />
  </div>
</template>

<script>
import UserService from '../../services/user-service'
import AddUser from '../AddUser'
import UserList from '../UserList'
import SelectUser from '../SelectUser'

export default {
  name: 'GeneralManager',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    UserService.getGeneralManagerDashboard().then(
      response => {
        this.content = response.data
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
      }
    )
  },
  components: {
    SelectUser,
    AddUser,
    UserList
  }
}
</script>
