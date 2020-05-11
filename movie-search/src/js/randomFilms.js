import createCards from './createCards'
import mySwiper from './swiper'

function randomFilms() {
  const slidesArray = []
  const randomMovieArray = ['Game of Thrones', 'The Green Mile', 'Avatar', 'The Little Mermaid', 'Lady and the Tramp', 'Ford v Ferrari', 'Joker', 'Inside Out', 'Green Book', 'Balto', 'The Dark Knight', 'Rain Man', 'Lion King', 'The Notebook', 'Toy Story', 'Forrest Gump', 'Inception', 'Interstellar', 'Back to the Future', 'The Matrix', 'Catch Me If You Can']
  randomMovieArray.map((film) => {
    fetch(`https://www.omdbapi.com/?t=${film}&apikey=624b2fc6`)
      .then((resp) => resp.json())
      .then((data) => {
        createCards(data, slidesArray)
        mySwiper.appendSlide(slidesArray)
        mySwiper.update()
      })
  })
}
export default randomFilms