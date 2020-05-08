import '../css/style.scss'

import searchMovies from './searchMovies'
import randomFilms from './randomFilms'

window.addEventListener('load', () => {
  randomFilms()
})

const button = document.querySelector('.search-button')
button.addEventListener('click', () => {
  searchMovies()
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
  }
})

document.querySelector('.swiper-wrapper').addEventListener('click', (event) => {
  const parent = event.target.offsetParent
  if (event.target.classList.contains('reverse')) {
    parent.childNodes[5].classList.remove('none')
    parent.classList.add('flip-card')
    event.target.classList.add('none')
    parent.childNodes[0].classList.add('transform')
    parent.childNodes[1].classList.add('opacity')
    parent.childNodes[2].classList.add('opacity')
    parent.childNodes[3].classList.add('opacity')
    event.target.classList.remove('reverse')
  }
  parent.addEventListener('mouseleave', () => {
    if (parent.classList.contains('flip-card')) {
      parent.classList.remove('flip-card')
      event.target.classList.add('reverse')
      event.target.classList.remove('none')
      parent.classList.remove('flip-card-back')
      parent.childNodes[0].classList.remove('transform')
      parent.childNodes[1].classList.remove('opacity')
      parent.childNodes[2].classList.remove('opacity')
      parent.childNodes[3].classList.remove('opacity')
      parent.childNodes[5].classList.add('none')
    }
  })
})
