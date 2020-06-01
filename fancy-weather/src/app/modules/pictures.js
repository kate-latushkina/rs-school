const picturesKey = 'OMw_Ipnb7Jq6-YqHZwqx1-w8S4jaJ9DLCEeeWjdVuO8'

function getBackgroundPictures(visit) {
  let filter
  const dateNow = new Date()
  const hourNow = dateNow.getHours()
  if (visit === 1) {
    // eslint-disable-next-line default-case
    switch (hourNow) {
      case 23:
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        filter = 'night'
        break
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        filter = 'morning'
        break
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        filter = 'afternoon'
        break
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
        filter = 'evening'
        break
    }
  } else {
    filter = 'forest'
  }
  fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=city,${filter},weather,nature&client_id=${picturesKey}`)
    .then((resp) => resp.json())
    .then((data) => {
      document.querySelector('body').style.backgroundImage = `url(${data.urls.regular})`
      document.querySelector('body').classList.add('body-background')
    })
}

export default getBackgroundPictures
