function deleteCards() {
  document.querySelectorAll('.swiper-slide').forEach((weather) => {
    weather.remove(weather)
  })
}
export default deleteCards
