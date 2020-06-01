import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  initialSlide: 0,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    540: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
  },
})
export default mySwiper
