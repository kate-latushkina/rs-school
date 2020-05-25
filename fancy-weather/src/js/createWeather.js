function createWeather(data, arr) {
  document.querySelector('.location').innerHTML = data.city.name
  document.querySelector('.temperature-now').innerHTML = `${(data.list[0].main.temp - 273).toFixed(1)}`
  document.querySelector('.icon-cloud').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png">`
  document.querySelector('.cloudy').innerHTML = data.list[0].weather[0].description
  document.querySelector('.feels-like').innerHTML = `FEELS LIKE: ${(data.list[0].main.feels_like - 273).toFixed(1)}${'&deg'}`
  document.querySelector('.wind').innerHTML = `WIND: ${Math.ceil(data.list[0].wind.speed)} M/S`
  document.querySelector('.humidity').innerHTML = `HUMIDITY: ${data.list[0].main.humidity}%`

  const newDataList = data.list.filter(element => {
    const timeADay = new Date(element.dt_txt)
    return timeADay.getHours() === 12
  })
  
  for(let i = 0; i < 5; i += 1) {
    const daysTemp = document.createElement('div')
    document.querySelector('.swiper-wrapper').appendChild(daysTemp)
    daysTemp.classList.add('days-temperature')
    daysTemp.classList.add('swiper-slide')
    const weekTitleDay = document.createElement('h4')
    daysTemp.appendChild(weekTitleDay)
    weekTitleDay.classList.add('week-day')
    const weekIcon = document.createElement('div')
    daysTemp.appendChild(weekIcon)
    weekIcon.classList.add('week-icon-temp')
    const weekDayTemp = document.createElement('span')
    daysTemp.appendChild(weekDayTemp)
    weekDayTemp.classList.add('week-temp-day')
    
    const currentDate = new Date(newDataList[i].dt_txt).toLocaleString('en', {weekday: 'long',})
    weekTitleDay.innerHTML = currentDate
    weekIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${newDataList[i].weather[0].icon}@2x.png">`

    weekDayTemp.innerHTML = `${(newDataList[i].main.temp - 273).toFixed(1)}${'&deg'}`
    arr.push(daysTemp)
  }  
}

export default createWeather