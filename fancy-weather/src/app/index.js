import getBackgroundPictures from './modules/pictures'
import getWeatherDay from './modules/weather'
import '../style/app.scss'

const languages = {
  english: 'en',
  russian: 'ru',
  belarus: 'be',
}

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', languages.english)
}
const degrees = {
  fahrenheit: 'fahrenheit',
  celsius: 'celsius',
}
if (!localStorage.getItem('degrees')) {
  localStorage.setItem('degrees', degrees.celsius)
}

let lang = localStorage.getItem('lang')
let visit = 1
const optionsLang = document.querySelector('select')
optionsLang.addEventListener('change', () => {
  lang = optionsLang.value
  localStorage.setItem('lang', lang)
  getWeatherDay(visit, lang)
})

window.onload = () => {
  document.querySelectorAll('option').forEach((e) => {
    if (e.value === lang) {
      e.setAttribute('selected', true)
    }
  })
  document.querySelectorAll('.change-temperature').forEach((temp) => {
    if (temp.classList.contains(localStorage.getItem('degrees'))) {
      temp.classList.remove('off-button')
    } else {
      temp.classList.add('off-button')
    }
  })
  getWeatherDay(visit, lang, true)
}

const daysTemperature = document.querySelectorAll('.days-temperature')
const changeBackImage = document.querySelector('.change-image')
changeBackImage.addEventListener('click', () => {
  visit += 1
  getBackgroundPictures(visit)
})
const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.button-search')
searchButton.addEventListener('click', () => {
  daysTemperature.forEach((elem) => {
    elem.remove(elem)
  })
  visit += 1
  getWeatherDay(visit, lang, true)
  searchInput.value = ''
})


searchInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    daysTemperature.forEach((elem) => {
      elem.remove(elem)
    })
    visit += 1
    getWeatherDay(visit, lang, true)
    searchInput.value = ''
  }
})


const celsius = document.querySelector('.celsius')
const fahrenheit = document.querySelector('.fahrenheit')

fahrenheit.addEventListener('click', () => {
  celsius.classList.add('off-button')
  fahrenheit.classList.remove('off-button')
  localStorage.setItem('degrees', 'fahrenheit')
  getWeatherDay(visit, lang)
})

celsius.addEventListener('click', () => {
  fahrenheit.classList.add('off-button')
  celsius.classList.remove('off-button')
  localStorage.setItem('degrees', 'celsius')
  getWeatherDay(visit, lang)
})
