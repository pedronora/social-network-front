<script>
import { dateFunctions } from '@/utils/dateFunctions'
import { commentRepository } from '@/repository/CommentRepository'

export default {
  props: ['id', 'title', 'content', 'createdAt', 'comments'],
  data() {
    return {
      comment: {
        content: '',
        post: {
          id: this.id
        }
      }
    }
  },
  methods: {
    formatDate(dateString) {
      return dateFunctions.formatDate(dateString)
    },
    async publishComment() {
      await commentRepository.create(this.comment)
      this.comment.content = ''
      this.$emit('comment-published')
    }
  }
}
</script>

<template>
  <div class="border rounded shadow my-2 p-2">
    <h2>{{ title }}</h2>
    <div class="fs-4">{{ content }}</div>
    <div class="fs-6 pt-2">Criado em {{ formatDate(this.createdAt) }}</div>

    <div class="text-bg-light my-2">
      <form @submit.prevent="publishComment">
        <div class="m-3">
          <label for="commentTextArea" class="form-label">Comentar:</label>
          <textarea
            v-model="comment.content"
            class="form-control mb-3"
            id="commentTextArea"
            rows="3"
          ></textarea>
          <button class="btn btn-primary mb-3" type="submit">Publicar</button>
        </div>
      </form>
      <div v-if="comments.length > 0" class="m-2">
        <h3>Comentários:</h3>
        <div class="p-2 border rounded" v-for="comment in comments" :key="comment.id">
          <div class="fs-4">{{ comment.content }}</div>
          <div class="fs-6">Publicado em {{ formatDate(comment.createdAt) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
