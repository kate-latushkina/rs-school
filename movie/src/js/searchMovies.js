import createCards from './createCards'
import deleteCards from'./deleteCards'
import mySwiper from './swiper'

function searchMovies() {
  console.log(mySwiper)
  const slideArray = []
  const input = document.querySelector('.search-input')
  fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=624b2fc6`)
    .then((resp) => resp.json())
    .then((data) => {
      document.querySelector('.info').innerHTML = ''
      if (data.Error) {
        document.querySelector('.info').innerHTML = `No result for "${input.value}"`
      } else {
        deleteCards()
        const arr = []
        data.Search.forEach((film) => {
          arr.push(film.Title)
        })
        arr.map((film) => {
          fetch(`http://www.omdbapi.com/?t=${film}&apikey=624b2fc6`)
            .then((resp) => resp.json())
            .then((dataFilm) => {
              createCards(dataFilm, slideArray)
              mySwiper.appendSlide(slideArray)
            })
        })
      }
    })
}
export default searchMovies