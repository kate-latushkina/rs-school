const picturesKey = 'OMw_Ipnb7Jq6-YqHZwqx1-w8S4jaJ9DLCEeeWjdVuO8';

function getBackgroundPictures() {
  fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=city,forest&client_id=${picturesKey}`)
  .then((resp) => { return resp.json() })
  .then((data) => {
    document.querySelector('body').style.backgroundImage = `url(${data.urls.regular})`
    document.querySelector('body').classList.add('body-background')
  })
}

export default getBackgroundPictures;

