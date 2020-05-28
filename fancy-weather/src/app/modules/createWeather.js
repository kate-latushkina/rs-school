import weatherIcon from './weatherIcon'
import dictionary from './language'
import deleteCards from './deleteCard'

function createWeather(data, arr, lang) {
  const degKelvin = 273.15
  try {
    const newDataList = data.list.filter((element) => {
      const timeADay = new Date(element.dt_txt)
      return timeADay.getHours() === 15
    })
    const nameIconNow = data.list[0].weather[0].icon
    document.querySelector('.temperature-now').innerHTML = `${(data.list[0].main.temp - degKelvin).toFixed(1)}`
    document.querySelector('.icon-cloud').setAttribute('src', weatherIcon[nameIconNow])
    document.querySelector('.cloudy').innerHTML = data.list[0].weather[0].description
    document.querySelector('.feels-like').innerHTML = `${dictionary.feelsLike[lang]}: ${(data.list[0].main.feels_like - degKelvin).toFixed(1)}${'&deg'}`
    document.querySelector('.wind').innerHTML = `${dictionary.wind[lang]}: ${Math.ceil(data.list[0].wind.speed)} ${dictionary.speed[lang]}`
    document.querySelector('.humidity').innerHTML = `${dictionary.humidity[lang]}: ${data.list[0].main.humidity}%`
    deleteCards()
    for (let i = 0; i < 5; i += 1) {
      const daysTemp = document.createElement('div')
      document.querySelector('.swiper-wrapper').appendChild(daysTemp)
      daysTemp.classList.add('days-temperature')
      daysTemp.classList.add('swiper-slide')
      const weekTitleDay = document.createElement('h4')
      daysTemp.appendChild(weekTitleDay)
      weekTitleDay.classList.add('week-day')
      const weekIcon = document.createElement('img')
      const nameIcon = newDataList[i].weather[0].icon
      weekIcon.setAttribute('src', weatherIcon[nameIcon])
      daysTemp.appendChild(weekIcon)
      weekIcon.classList.add('week-icon-temp')
      const weekDayTemp = document.createElement('span')
      daysTemp.appendChild(weekDayTemp)
      weekDayTemp.classList.add('week-temp-day')

      const currentDate = new Date(newDataList[i].dt_txt).toLocaleString(lang, { weekday: 'long' })
      weekTitleDay.innerHTML = currentDate

      weekDayTemp.innerHTML = `${(newDataList[i].main.temp - degKelvin).toFixed(1)}${'&deg'}`
      arr.push(daysTemp)
    }
  } catch (error) {
    document.querySelector('.location').innerHTML = dictionary.searchError[lang]
  }
}

export default createWeather
