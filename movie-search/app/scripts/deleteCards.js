module.exports = function deleteCards() {
  document.querySelectorAll('.swiper-slide').forEach((film) => {
    film.remove(film)
  })
}
