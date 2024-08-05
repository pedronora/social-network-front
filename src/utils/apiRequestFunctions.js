async function fetchData(url, options) {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error with fetch request:`, error)
    return null
  }
}

export const apiRequestFunctions = { fetchData }
