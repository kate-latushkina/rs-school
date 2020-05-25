import createWeather from './createWeather.js'
import mySwiper from './swiper.js'

function getWeatherDay(visit) {
  const slidesArray = []
  const weatherKey = '6b190133b1b7df010e391874c7540cd3'
  const whatCity = document.querySelector('.search-input').value

  const tokenKey = 'ac3dcc6e0ce397'
  if (visit === 1) {
    fetch(`https://ipinfo.io?token=${tokenKey}`)
    .then((resp) => { return resp.json() })
    .then((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.loc.split(',')[0]}&lon=${data.loc.split(',')[1]}&appid=${weatherKey}`)
        .then((resp) => { return resp.json() })
        .then((dataDay) => {
          mySwiper.appendSlide(slidesArray)
          createWeather(dataDay, slidesArray)
          mySwiper.update()
      })  
    })
  } else {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${whatCity}&appid=${weatherKey}`)
    .then((resp) => { return resp.json() })
    .then((dataCity) => {
      createWeather(dataCity, slidesArray)
      mySwiper.update()
    })
  }
}

export default getWeatherDay