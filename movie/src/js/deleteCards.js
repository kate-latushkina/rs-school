function deleteCards() {
  document.querySelectorAll('.swiper-slide').forEach((film) => {
    film.remove(film)
  })
}
export default deleteCards
