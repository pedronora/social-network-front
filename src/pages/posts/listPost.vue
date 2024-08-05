<script>
import { postRepository } from '../../repository/PostRepository'
import PostCard from '../../components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getAllPosts() {
      this.posts = await postRepository.getAll()
    }
  },
  async mounted() {
    this.getAllPosts()
  }
}
</script>

<template>
  <div><h1>Timeline</h1></div>
  <div>
    <router-link :to="{ name: 'CreatePost' }" class="btn btn-primary btn-sm">Novo Post</router-link>
  </div>
  <div class="row">
    <div class="col-md-6 mb-4" v-for="post in posts" :key="post.id">
      <post-card
        :id="post.id"
        :title="post.title"
        :content="post.content"
        :createdAt="post.createdAt"
        :comments="post.comments"
        @comment-published="getAllPosts"
      />
    </div>
  </div>
  <div v-if="posts.length == 0" class="my-2 fs-1">Ainda não há postagens criadas.</div>
</template>
