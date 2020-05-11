import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
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
      spaceBetween: 20,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
})
export default mySwiper