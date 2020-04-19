const menu = require('./scripts/menu')
const cards = require('./scripts/cards')
const createCards = require('./scripts/createCards')
const clickCard = require('./scripts/clickCard')
const checkPlay = require('./scripts/play')

window.addEventListener('load', () => {
  menu()
  createCards(cards)
})

// create cards and click main card
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const clickNav = e.srcElement.hash.substring(1)
    clickCard(e, clickNav)
  }
  if (document.querySelector('#main-title').textContent === 'Main page') {
    const clickElem = e.srcElement.text
    clickCard(e, clickElem)
    document.querySelector('.startGame').classList.add('none')
  }
}, true)

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
  checkPlay()
}

// reverse and audio
document.body.addEventListener('click', (event) => {
  if (event.target !== document.querySelector('#nav')) {
    const parent = event.target.offsetParent
    if (event.target.classList.contains('reverse')) {
      parent.classList.add('flip-card')
      event.target.classList.add('none')
      event.target.classList.remove('reverse')
      parent.childNodes[1].classList.add('flip-card')
      parent.childNodes[2].classList.add('flip-card')
      parent.childNodes[1].innerHTML = parent.childNodes[1].dataset.translate
    }
    parent.addEventListener('mouseleave', () => {
      if (parent.classList.contains('flip-card')) {
        parent.classList.remove('flip-card')
        event.target.classList.remove('reverse')
        parent.childNodes[1].classList.remove('flip-card')
        parent.childNodes[2].classList.remove('flip-card')
        parent.childNodes[3].classList.add('reverse')
        parent.childNodes[3].classList.remove('none')
        parent.childNodes[1].innerHTML = parent.childNodes[1].dataset.word
      }
    })
    if (event.target.classList.contains('card-pic') && event.target.offsetParent.classList.contains('playCard') === false) {
      const audio = event.target.offsetParent.querySelector('audio')
      audio.setAttribute('src', event.target.offsetParent.querySelector('source').getAttribute('src'))
      audio.play()
    }
  }
})
