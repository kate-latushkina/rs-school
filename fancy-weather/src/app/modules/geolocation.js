import dictionary from './language'

function getGeolocation(data, lang) {
  const locationKey = '1a09b58245c142c590aa7dc82af15c4d'

  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${data.split(',')[0]}+${data.split(',')[1]}&key=${locationKey}`)
    .then((resp) => resp.json())
    .then((geolocation) => {
      document.querySelector('.location').innerHTML = `${geolocation.results[0].components.city}, ${geolocation.results[0].components.country}`
      const latitude = document.querySelector('.lat')
      const longitude = document.querySelector('.lon')
      latitude.innerHTML = `${dictionary.latitude[lang]}: ${(geolocation.results[0].geometry.lat).toFixed(2).split('.')[0]}${'&deg'}${(geolocation.results[0].geometry.lat).toFixed(2).split('.')[1]}${'&#39;'}`
      longitude.innerHTML = `${dictionary.longitude[lang]}: ${(geolocation.results[0].geometry.lng).toFixed(2).split('.')[0]}${'&deg'}${(geolocation.results[0].geometry.lng).toFixed(2).split('.')[1]}${'&#39;'}`
    })
}

export default getGeolocation
