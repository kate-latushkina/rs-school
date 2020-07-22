module.exports = function menu() {
  const burgerButton = document.querySelector('.burger-button')
  const burgerNav = document.querySelector('#nav')
  const burgerMenu = document.querySelector('.burger_menu')
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-active')
    burgerNav.classList.toggle('burger-active')
    burgerMenu.classList.toggle('active-menu')
    burgerNav.classList.toggle('shadow')
  })

  document.addEventListener('click', (link) => {
    if (link.target.classList.contains('burger_menu-line')) {
      document.querySelectorAll('.burger_menu-line').forEach((burgerLink) => {
        burgerLink.style.color = 'white'
      })
    }
    if (link.target.classList.contains('burger_menu-line') || link.target.tagName === 'NAV') {
      link.target.style.color = 'yellow'
      burgerButton.classList.remove('burger-active')
      burgerNav.classList.remove('burger-active')
      burgerMenu.classList.remove('active-menu')
      burgerNav.classList.remove('shadow')
    }
  })
}
