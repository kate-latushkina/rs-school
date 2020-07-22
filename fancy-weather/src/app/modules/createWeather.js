import weatherIcon from './weatherIcon'
import dictionary from './language'
import deleteCards from './deleteCard'
import weatherTranslate from './weatherTranslate'
import weekTranslate from './weekDaysTranslate'

function createWeather(data, arr, lang) {
  const belLang = 'be'
  const daysWeather = 5
  const degKelvin = 273.15
  const averageTemp = 15
  const fahrenheit = document.querySelector('.fahrenheit ')
  const errorMessage = document.querySelector('.error-message')
  const footerString = document.querySelector('marquee')
  const space = '-----'
  try {
    errorMessage.innerHTML = ''
    const newDataList = data.list.filter((element) => {
      const timeADay = new Date(element.dt_txt)
      return timeADay.getHours() === averageTemp
    })
    const nullCelsius = 32
    const oneFahrenheit = 1.8
    const nameIconNow = data.list[0].weather[0].icon

    footerString.innerHTML = `${dictionary.temp[lang]}: 
    ${(data.list[0].main.temp - degKelvin).toFixed(1)}${'&deg'} ${space}
    ${dictionary.feelsLike[lang]}: ${(data.list[0].main.feels_like - degKelvin).toFixed(1)}${'&deg'} Celsius 
    (${(oneFahrenheit * (data.list[0].main.temp - degKelvin) + nullCelsius).toFixed(1)} Fahrenheit   
    ${dictionary.feelsLike[lang]}: ${(oneFahrenheit * (data.list[0].main.feels_like - degKelvin) + nullCelsius).toFixed(1)} Fahrenheit) ${space} 
    ${data.list[0].weather[0].description} ${space} 
    ${dictionary.wind[lang]}: ${Math.ceil(data.list[0].wind.speed)} ${dictionary.speed[lang]} ${space} 
    ${dictionary.humidity[lang]}: ${data.list[0].main.humidity}%
    `

    if (!fahrenheit.classList.contains('off-button')) {
      // ºF = 1.8 x (K - 273) + 32.
      document.querySelector('.temperature-now').innerHTML = `${(oneFahrenheit * (data.list[0].main.temp - degKelvin) + nullCelsius).toFixed(1)}`
      document.querySelector('.feels-like').innerHTML = `${dictionary.feelsLike[lang]}: ${(oneFahrenheit * (data.list[0].main.feels_like - degKelvin) + nullCelsius).toFixed(1)}`
    }
    if (fahrenheit.classList.contains('off-button')) {
      document.querySelector('.temperature-now').innerHTML = `${(data.list[0].main.temp - degKelvin).toFixed(1)}`
      document.querySelector('.feels-like').innerHTML = `${dictionary.feelsLike[lang]}: ${(data.list[0].main.feels_like - degKelvin).toFixed(1)}${'&deg'}`
    }
    document.querySelector('.icon-cloud').setAttribute('src', weatherIcon[nameIconNow])
    document.querySelector('.cloudy').innerHTML = data.list[0].weather[0].description
    if (lang === belLang) {
      document.querySelector('.cloudy').innerHTML = weatherTranslate[lang][data.list[0].weather[0].id]

      footerString.innerHTML = `${dictionary.temp[lang]}: 
      ${(data.list[0].main.temp - degKelvin).toFixed(1)}${'&deg'} ${space}
      ${dictionary.feelsLike[lang]}: ${(data.list[0].main.feels_like - degKelvin).toFixed(1)}${'&deg'} Celsius 
      (${(oneFahrenheit * (data.list[0].main.temp - degKelvin) + nullCelsius).toFixed(1)} Fahrenheit   
      ${dictionary.feelsLike[lang]}: ${(oneFahrenheit * (data.list[0].main.feels_like - degKelvin) + nullCelsius).toFixed(1)} Fahrenheit) ${space} 
      ${weatherTranslate[lang][data.list[0].weather[0].id]} ${space} 
      ${dictionary.wind[lang]}: ${Math.ceil(data.list[0].wind.speed)} ${dictionary.speed[lang]} ${space} 
      ${dictionary.humidity[lang]}: ${data.list[0].main.humidity}%
      `
    }
    document.querySelector('.wind').innerHTML = `${dictionary.wind[lang]}: ${Math.ceil(data.list[0].wind.speed)} ${dictionary.speed[lang]}`
    document.querySelector('.humidity').innerHTML = `${dictionary.humidity[lang]}: ${data.list[0].main.humidity}%`
    deleteCards()
    for (let i = 0; i < daysWeather; i += 1) {
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
      if (lang === belLang) {
        weekTitleDay.innerHTML = weekTranslate.weekBe.full[weekTitleDay.innerText]
      }
      if (!fahrenheit.classList.contains('off-button')) {
        weekDayTemp.innerHTML = `${(oneFahrenheit * (newDataList[i].main.temp - degKelvin) + nullCelsius).toFixed(1)}`
      }
      if (fahrenheit.classList.contains('off-button')) {
        weekDayTemp.innerHTML = `${(newDataList[i].main.temp - degKelvin).toFixed(1)}${'&deg'}`
      }
      arr.push(daysTemp)
    }
  } catch (error) {
    errorMessage.innerHTML = dictionary.searchError[lang]
  }
}

export default createWeather
