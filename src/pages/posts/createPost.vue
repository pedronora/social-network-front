<script>
import { postRepository } from '@/repository/PostRepository'

export default {
  data() {
    return {
      post: { title: '', content: '' }
    }
  },
  methods: {
    async createPost() {
      await postRepository.create(this.post)
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>

<template>
  <h1>Novo Post</h1>
  <form @submit.prevent="createPost">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Título</label>
      <input v-model="post.title" type="text" class="form-control" id="tituloPost" required />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Conteúdo</label>
      <textarea
        v-model="post.content"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        required
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Postar</button>
    <router-link class="btn btn-secondary ms-2" :to="{ name: 'Posts' }">Retornar</router-link>
  </form>
</template>
