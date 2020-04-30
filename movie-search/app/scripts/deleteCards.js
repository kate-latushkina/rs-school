module.exports = function deleteCards() {
  document.querySelectorAll('.film-block').forEach((film) => {
    film.remove(film)
  })
}
