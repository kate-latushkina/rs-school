import getBackgroundPictures from './modules/pictures'
import getWeatherDay from './modules/weather'
import '../style/app.scss'
// import changeLanguage from './modules/changeLanguage'

const languages = {
  english: 'en',
  russian: 'ru',
  belarus: 'be',
}

if (localStorage.getItem('lang') === null) {
  localStorage.setItem('lang', languages.english)
}

let lang = localStorage.getItem('lang')
let visit = 1
const optionsLang = document.querySelector('select')
optionsLang.addEventListener('change', () => {
  lang = optionsLang.value
  // changeLanguage(lang)
  getWeatherDay(visit, lang)
})

window.onload = () => {
  getBackgroundPictures()
  getWeatherDay(visit, lang)
  // console.log(lang)
}

const daysTemperature = document.querySelectorAll('.days-temperature')
const changeBackImage = document.querySelector('.change-image')
changeBackImage.addEventListener('click', () => {
  getBackgroundPictures()
})
const searchButton = document.querySelector('.button-search')
searchButton.addEventListener('click', () => {
  daysTemperature.forEach((elem) => {
    elem.remove(elem)
  })
  visit += 1
  getWeatherDay(visit, lang)
  searchInput.value = ''
})

const searchInput = document.querySelector('.search-input')
searchInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    daysTemperature.forEach((elem) => {
      elem.remove(elem)
    })
    visit += 1
    getWeatherDay(visit, lang)
    searchInput.value = ''
  }
})


const celsius = document.querySelector('.celsius')
const fahrenheit = document.querySelector('.fahrenheit')

fahrenheit.addEventListener('click', () => {
  celsius.classList.add('off-button')
  fahrenheit.classList.remove('off-button')
  getWeatherDay(visit, lang)
})

celsius.addEventListener('click', () => {
  fahrenheit.classList.add('off-button')
  celsius.classList.remove('off-button')
  getWeatherDay(visit, lang)
})
