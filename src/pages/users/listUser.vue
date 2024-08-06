<script>
import { userRepository } from '../../repository/UserRepository'

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async getAllUsers() {
      this.users = await userRepository.getAll()
    }
  },
  mounted() {
    this.getAllUsers()
  }
}
</script>

<template>
  <h1>Usuários cadastrados</h1>
  <router-link class="btn btn-primary btn-sl my-2" :to="{name: 'CreateUser'}">Novo Usuário</router-link>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.username }}</td>
        <td>{{  user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>
