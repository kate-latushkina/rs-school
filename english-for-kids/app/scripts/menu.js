module.exports = function menu() {
  const burgerButton = document.querySelector('.burger-button')
  const burgerNav = document.querySelector('#nav')
  const burgerMenu = document.querySelector('.burger_menu')
  // const menuLinks = document.querySelectorAll('.burger_menu-line')
  // const mainTitle = document.getElementById('main-title')
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-active')
    burgerNav.classList.toggle('burger-active')
    burgerMenu.classList.toggle('active-menu')
    burgerNav.classList.toggle('shadow')
  })

  document.addEventListener('click', (link) => {
    if (link.target.tagName === 'A' || link.target.tagName === 'NAV') {
      burgerButton.classList.remove('burger-active')
      burgerNav.classList.remove('burger-active')
      burgerMenu.classList.remove('active-menu')
      burgerNav.classList.remove('shadow')
    }
  })
}
