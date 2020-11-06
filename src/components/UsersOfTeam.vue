<template>
  <div>
    <h2> User list of team {{ teamName }}  </h2>

    <ul class="list-group mt-5">
      <li class="list-group-item list-group-item-action" v-for="user in usersList" :key="user.id">

        <div class="d-flex w-100 justify-content-between">
          <h3>{{user.name}}</h3> <!-- Shows the user name selected -->

          <!-- Used to delete a user -->
          <small class="text-danger delete" @click="deleteUserFromList(user.id)">&#10005;</small>
        </div>
        <p>{{user.email}}</p>

      </li>
    </ul>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'UsersOfTeam',
  data: function () {
    return {
      teamName: ''
    }
  },
  methods: {
    ...mapActions(['getUsers', 'deleteUserFromList'])
  },
  computed: mapGetters(['usersList']),
  created () {
    this.getUsers()
  },
  teamName () {
    return JSON.parse(localStorage.getItem('user')).team.name
  }
}
</script>

<style>
 .delete {
   font-size: 18px;
   cursor: pointer;
 }
</style>
