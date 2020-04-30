const getApi = require('./scripts/getApi')
const searchMovies = require('./scripts/searchMovies')
const randomFilms = require('./scripts/randomFilms')

window.addEventListener('load', () => {
  getApi()
  randomFilms()
})

const button = document.querySelector('.search-button')
button.addEventListener('click', () => {
  searchMovies()
})
