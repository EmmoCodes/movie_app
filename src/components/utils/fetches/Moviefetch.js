export const getAllMovies = (apiKey, setState, key) => {
  fetch(apiKey)
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong with fetch')
      }
      return response.json()
    })
    .then(response => (key ? setState(response.results[key]) : setState(response.results)))
    .catch(error => console.log(error.message))
}
