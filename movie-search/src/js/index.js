import '../css/style.scss'

import searchMovies from './searchMovies'
import randomFilms from './randomFilms'
import searchPage from './searchPage'

window.addEventListener('load', () => {
  randomFilms()
})

const button = document.querySelector('.search-button')
button.addEventListener('click', () => {
  searchMovies()
  searchPage()
})
const input = document.querySelector('.search-input')
document.querySelector('.clear-img-input').addEventListener('click', () => {
  input.value = ''
})

input.addEventListener('blur', () => {
  input.focus()
})

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    searchMovies()
    searchPage()
  }
})
