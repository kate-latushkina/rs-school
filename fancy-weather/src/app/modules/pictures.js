/* eslint-disable default-case */
const picturesKey = 'OMw_Ipnb7Jq6-YqHZwqx1-w8S4jaJ9DLCEeeWjdVuO8'

function getBackgroundPictures(visit, nameZone) {
  const filter = []
  if (visit === 1) {
    const options = {
      timeZone: nameZone,
      day: 'numeric',
      month: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      year: 'numeric',
      hour12: false,
    }
    const dateNow = new Date().toLocaleString('ru', options)
    const dateLang = dateNow.replace(/,/g, '').split(' ')
    const hourNow = dateLang[1].slice(0, 2)
    const monthNow = dateLang[0].slice(3, 5)
    switch (hourNow) {
      case '23':
      case '00':
      case '01':
      case '02':
      case '03':
      case '04':
        filter.push('night')
        break
      case '05':
      case '06':
      case '07':
      case '08':
      case '09':
      case '10':
      case '11':
        filter.push('morning')
        break
      case '12':
      case '13':
      case '14':
      case '15':
      case '16':
      case '17':
        filter.push('afternoon')
        break
      case '18':
      case '19':
      case '20':
      case '21':
      case '22':
        filter.push('evening')
        break
    }
    switch (monthNow) {
      case '12':
      case '01':
      case '02':
        filter.push('winter')
        break
      case '03':
      case '04':
      case '05':
        filter.push('spring')
        break
      case '06':
      case '07':
      case '08':
        filter.push('summer')
        break
      case '09':
      case '10':
      case '11':
        filter.push('autumn')
        break
    }
  } else {
    filter.push('forest')
    filter.push('city')
  }
  const endFilter = filter.join(',')
  fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${endFilter},weather,nature&client_id=${picturesKey}`)
    .then((resp) => resp.json())
    .then((data) => {
      document.querySelector('.body-background').style.backgroundImage = `url(${data.urls.regular})`
    })
}

export default getBackgroundPictures
