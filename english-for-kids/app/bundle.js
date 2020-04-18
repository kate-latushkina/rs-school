const menu = require('./scripts/menu')
const cards = require('./scripts/cards')
const createCards = require('./scripts/createCards')
const clickCard = require('./scripts/clickCard')

window.addEventListener('load', () => {
  menu()
  createCards(cards)
})

// create cards and click main card
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'NAV') {
    const clickNav = e.srcElement.hash.substring(1)
    clickCard(e, clickNav)
  }
  if (document.querySelector('#main-title').textContent === 'Main page') {
  // if (document.querySelector('#main-title').textContent === 'Main page') {
    const clickElem = e.srcElement.text
    clickCard(e, clickElem)
    // const btn = document.querySelectorAll('.reverse')
    // btn.forEach(button => {
    //   button.classList.remove('reverse')
    // })
  }
}, true)


document.body.addEventListener('click', (event) => {
  const parent = event.target.offsetParent
  if (event.target.classList.contains('reverse')) {
    parent.classList.add('flip-card')
    parent.childNodes[1].classList.add('flip-card')
    parent.childNodes[2].classList.add('flip-card')
    parent.childNodes[1].innerHTML = parent.childNodes[1].dataset.translate
  }
  parent.addEventListener('mouseout', () => {
    if (parent.classList.contains('flip-card')) {
      parent.classList.remove('flip-card')
      parent.childNodes[1].classList.remove('flip-card')
      parent.childNodes[2].classList.remove('flip-card')
      parent.childNodes[1].innerHTML = parent.childNodes[1].dataset.word
    }
  })
  // if (event.target.classList.contains('mainCards')) {
  //   // event.target.play()
  //   console.log(777)
  // }
})


// Change train on play
const trainPlayButton = document.querySelector('.check')

trainPlayButton.onclick = () => {
  const cardColor = document.querySelectorAll('.mainCards')
  cardColor.forEach((e) => {
    if (e.classList.contains('cardsBG-train')) {
      document.querySelector('.swichOn').style.opacity = 0
      document.querySelector('.swichOff').style.opacity = 1
      e.classList.remove('cardsBG-train')
      e.classList.add('cardsBG-play')
    } else {
      document.querySelector('.swichOn').style.opacity = 1
      document.querySelector('.swichOff').style.opacity = 0
      e.classList.remove('cardsBG-play')
      e.classList.add('cardsBG-train')
    }
  })
}
