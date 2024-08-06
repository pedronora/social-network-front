import { apiRequestFunctions } from '@/utils/apiRequestFunctions'

const BASE_API_URL = 'http://localhost:8081/api/users'

async function getAll() {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }

  return await apiRequestFunctions.fetchData(BASE_API_URL, options)
}

async function create(payload) {
  const postData = {
    username: payload.username,
    email: payload.email
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

export const userRepository = { getAll, create }
