const createCards = require('./createCards')
const mySwiper = require('./swiper')

module.exports = function randomFilms() {
  const slidesArray = []
  const randomMovieArray = ['Game of Thrones', 'The Green Mile', 'Inception', 'Interstellar', 'Back to the Future', 'The Matrix', 'Catch Me If You Can']
  randomMovieArray.map((film) => {
    fetch(`http://www.omdbapi.com/?t=${film}&apikey=624b2fc6`)
      .then((resp) => resp.json())
      .then((data) => {
        createCards(data, slidesArray)
        mySwiper.appendSlide(slidesArray)
        mySwiper.update()
      })
  })
}
