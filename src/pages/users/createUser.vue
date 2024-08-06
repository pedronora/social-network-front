<script>
import { userRepository } from '@/repository/UserRepository'

export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    }
  },
  methods: {
    async insertUser() {
      await userRepository.create(this.user)
      this.$router.push({ name: 'Users' })
    }
  }
}
</script>

<template>
  <h1>Cadastrar Usuário</h1>
  <form @submit.prevent="insertUser">
    <div class="mb-3">
      <label for="usernameInput" class="form-label">Username</label>
      <input
        v-model="user.username"
        type="text"
        class="form-control"
        id="usernameInput"
        required
      />
    </div>
    <div class="mb-3">
      <label for="emailInput" class="form-label">Email</label>
      <input v-model="user.email" type="email" class="form-control" id="emailInput" required />
    </div>
    <button type="submit" class="btn btn-primary">Cadastrar</button>
    <router-link :to="{ name: 'Users' }" class="btn btn-secondary ms-2">Voltar</router-link>
  </form>
</template>
