import dictionary from './language'

function getGeolocation(data, lang) {
  const locationKey = '1a09b58245c142c590aa7dc82af15c4d'
  const location = document.querySelector('.location')
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${data.split(',')[0]}+${data.split(',')[1]}&language=${lang}&key=${locationKey}`)
    .then((resp) => resp.json())
    .then((geolocation) => {
      let currentLocation
      currentLocation = geolocation.results[0].components.city
      if (geolocation.results[0].components.city === undefined) {
        currentLocation = geolocation.results[0].components.town
        if (geolocation.results[0].components.town === undefined) {
          currentLocation = geolocation.results[0].components.village
          if (geolocation.results[0].components.village === undefined) {
            currentLocation = geolocation.results[0].components.state
            if (geolocation.results[0].components.state === undefined) {
              currentLocation = geolocation.results[0].components.formatted
            }
          }
        }
      }
      location.innerHTML = `${currentLocation}, ${geolocation.results[0].components.country}`
      const latitude = document.querySelector('.lat')
      const longitude = document.querySelector('.lon')
      latitude.innerHTML = `${dictionary.latitude[lang]}: ${(geolocation.results[0].geometry.lat).toFixed(2).split('.')[0]}${'&deg'}${(geolocation.results[0].geometry.lat).toFixed(2).split('.')[1]}${'&#39;'}`
      longitude.innerHTML = `${dictionary.longitude[lang]}: ${(geolocation.results[0].geometry.lng).toFixed(2).split('.')[0]}${'&deg'}${(geolocation.results[0].geometry.lng).toFixed(2).split('.')[1]}${'&#39;'}`
    })
}

export default getGeolocation
