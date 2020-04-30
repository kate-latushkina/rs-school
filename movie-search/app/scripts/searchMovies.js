const createCards = require('./createCards')
const deleteCards = require('./deleteCards')

module.exports = function searchMovies() {
  const input = document.querySelector('.search-input')
  fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=624b2fc6`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      // console.log(data.Search)
      deleteCards()
      data.Search.map((film) => {
        createCards(film)
        console.log(film)
      })
    })
  console.log(9777)
}
