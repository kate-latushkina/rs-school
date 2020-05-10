async function loadPoster(cardPoster, link) {
  const image = cardPoster
  try {
    if (link === 'N/A') {
      image.setAttribute('src', './img/no-poster.jpg')
    } else {
      await fetch(link)
      image.setAttribute('src', `${link}`)
    }
  } catch (error) {
    image.setAttribute('src', './img/24451278.jpg')
  }
}
export default loadPoster