const Swiper = require('./swiper.min')

module.exports = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
