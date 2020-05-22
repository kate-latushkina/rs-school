function createWeather(data) {
  document.querySelector('.location').innerHTML = data.city.name
  document.querySelector('.temperature-now').innerHTML = `${(data.list[0].main.temp - 273).toFixed(1)}${'&deg'}`
  document.querySelector('.icon-cloud').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png">`
  document.querySelector('.cloudy').innerHTML = data.list[0].weather[0].description
  document.querySelector('.feels-like').innerHTML = `FEELS LIKE: ${(data.list[0].main.feels_like - 273).toFixed(1)}${'&deg'}`
  document.querySelector('.wind').innerHTML = `WIND: ${Math.ceil(data.list[0].wind.speed)} M/S`
  document.querySelector('.humidity').innerHTML = `HUMIDITY: ${data.list[0].main.humidity}%`
}

export default createWeather