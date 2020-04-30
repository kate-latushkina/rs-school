module.exports = function createCards(data) {
  const mainBlock = document.querySelector('.movie')
  const filmBlock = document.createElement('div')
  filmBlock.classList.add('film-block')
  mainBlock.appendChild(filmBlock)
  const filmTitle = document.createElement('a')
  filmBlock.appendChild(filmTitle)
  filmTitle.classList.add('film-title')
  filmTitle.innerHTML = data.Title
  const poster = document.createElement('img')
  poster.setAttribute('src', `${data.Poster}`)
  poster.classList.add('poster')
  filmBlock.appendChild(poster)
  const filmYear = document.createElement('div')
  filmBlock.appendChild(filmYear)
  filmYear.classList.add('film-year')
  filmYear.innerHTML = data.Year
  const filmImbd = document.createElement('div')
  filmBlock.appendChild(filmImbd)
  filmImbd.classList.add('film-imbd')
  filmImbd.innerHTML = data.imdbRating
}
