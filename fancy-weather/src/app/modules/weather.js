import createWeather from './createWeather'
import mySwiper from './swiper'
import getGeolocation from './geolocation'
import changeTimeZone from './changeTimeZone'
import dictionary from './language'
import getBackgroundPictures from './pictures'
import createMaps from './createMap'

function getWeatherDay(visit, lang) {
  const slidesArray = []
  const opencagedataKey = '1a09b58245c142c590aa7dc82af15c4d'
  const weatherKey = '6b190133b1b7df010e391874c7540cd3'
  const searchInput = document.querySelector('.search-input')
  let whatCity = searchInput.value
  const buttonSearch = document.querySelector('.button-search')
  buttonSearch.innerHTML = dictionary.search[lang]
  searchInput.placeholder = dictionary.searchPlaceholder[lang]
  const tokenKey = 'ac3dcc6e0ce397'
  try {
    if (visit === 1) {
      fetch(`https://ipinfo.io?&token=${tokenKey}`)
        .then((resp) => resp.json())
        .then((data) => {
          fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.loc.split(',')[0]}&lon=${data.loc.split(',')[1]}&appid=${weatherKey}&lang=${lang}`)
            .then((resp) => resp.json())
            .then((dataDay) => {
              mySwiper.appendSlide(slidesArray)
              createWeather(dataDay, slidesArray, lang)
              mySwiper.update()
            })
          getGeolocation(data.loc, lang)
          changeTimeZone(data.timezone, lang)
          createMaps(data.loc)
          getBackgroundPictures(visit, data.timezone)
        })
    } else {
      if (whatCity === '') {
        whatCity = searchInput.dataset.city
      }
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${whatCity}&appid=${weatherKey}&lang=${lang}`)
        .then((resp) => resp.json())
        .then((dataCity) => {
          createWeather(dataCity, slidesArray, lang)
          mySwiper.update()
          fetch(`https://api.opencagedata.com/geocode/v1/json?q=${whatCity}&timezone=0&key=${opencagedataKey}`)
            .then((resp) => resp.json())
            .then((geoloc) => {
              const geoPosition = []
              Object.keys(geoloc.results[0].geometry).forEach((key) => {
                geoPosition.push(geoloc.results[0].geometry[key])
              })
              const position = geoPosition.join(',')
              getGeolocation(position, lang)
              changeTimeZone(geoloc.results[0].annotations.timezone.name, lang)
              createMaps(position)
              getBackgroundPictures(1, geoloc.results[0].annotations.timezone.name)
            })
        })
      searchInput.setAttribute('data-city', whatCity)
    }
  } catch (error) {
    document.querySelector('.error-message').innerHTML = 'error'
  }
}

export default getWeatherDay
