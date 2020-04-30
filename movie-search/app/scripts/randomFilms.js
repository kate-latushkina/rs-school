const createCards = require('./createCards')

module.exports = function randomFilms() {
  const randomMovieArray = ['Game of Thrones', 'The Green Mile', 'Inception', 'Interstellar', 'Back to the Future', 'The Matrix', 'Catch Me If You Can']
  randomMovieArray.map((film) => {
    fetch(`http://www.omdbapi.com/?t=${film}&apikey=624b2fc6`)
      .then((resp) => resp.json())
      .then((data) => {
        createCards(data)
        console.log(data)
      })
  })
}
