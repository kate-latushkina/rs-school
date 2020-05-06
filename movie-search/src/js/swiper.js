import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // loop: true,
  // spaceBetween: 15,
  slidesPerView: 4,
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
    320: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    861: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1251: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
})
export default mySwiper