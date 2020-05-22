import '../css/style.css'
import '../css/style.scss'
import '../css/normalize.scss'
import getBackgroundPictures from'./pictures.js'
import getWeatherDay from'./weather.js'

window.onload = async () => {
  getBackgroundPictures()
  await getWeatherDay(1)
}

setInterval(() => {
  document.querySelector('.time').innerHTML = new Date().toLocaleString('en', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}, 1000)

const searchButton = document.querySelector('.button-search')
searchButton.addEventListener('click', () => {
  getWeatherDay(2)
})

const searchInput = document.querySelector('.search-input')
searchInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    getWeatherDay(2)
    searchInput.value = ''
  }
})