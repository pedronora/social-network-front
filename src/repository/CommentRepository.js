import { apiRequestFunctions } from '@/utils/apiRequestFunctions'

const BASE_API_URL = 'http://localhost:8080/api/comments'

async function create(payload) {
  const postData = {
    content: payload.content,
    post: {
      id: payload.post.id
    }
  }

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  }

  return await apiRequestFunctions.fetchData(BASE_API_URL, options)
}

export const commentRepository = { create }
