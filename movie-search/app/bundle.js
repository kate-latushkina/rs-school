const searchMovies = require('./scripts/searchMovies')
const randomFilms = require('./scripts/randomFilms')

window.addEventListener('load', () => {
  randomFilms()
})

const button = document.querySelector('.search-button')
button.addEventListener('click', () => {
  searchMovies()
})
