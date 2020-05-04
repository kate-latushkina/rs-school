module.exports = function createCards(data, arr) {
  const slide = document.createElement('div')
  slide.classList.add('swiper-slide')

  const filmTitle = document.createElement('a')
  slide.appendChild(filmTitle)
  filmTitle.classList.add('film-title')
  filmTitle.setAttribute('href', `https://www.imdb.com/title/${data.imdbID}/videogallery/`)
  filmTitle.innerText = data.Title
  const poster = document.createElement('img')
  poster.setAttribute('src', `${data.Poster}`)
  // if (data.Poster === 'N/A') {
  //   console.log(77)
  // }
  poster.classList.add('poster')
  slide.appendChild(poster)
  const filmYear = document.createElement('div')
  slide.appendChild(filmYear)
  filmYear.classList.add('film-year')
  filmYear.innerText = data.Year
  const filmImbd = document.createElement('div')
  slide.appendChild(filmImbd)
  filmImbd.classList.add('film-imbd')
  filmImbd.innerText = data.imdbRating
  arr.push(slide)
}
