const cards = require('./cards')

module.exports = function clickCard(e, clickNav) {
  const navID = {
    Main: 0,
    Action: 1,
    Colors: 2,
    Animal: 3,
    Vegetables: 4,
    Clothes: 5,
    Emotions: 6,
    Food: 7,
    Fruits: 8,
  }
  const oneCard = document.querySelectorAll('.mainCards')
  const createImages = document.querySelectorAll('.mainCards img')
  const cardText = document.querySelectorAll('.mainCards p')
  const audio = document.querySelectorAll('audio source')
  const audioData = document.querySelectorAll('audio')
  console.log(e.target)
  for (const key in navID) {
    if (clickNav === key) {
      const but = document.querySelectorAll('.reverse')
      if (clickNav === 'Main') {
        document.querySelector('#main-title').innerHTML = 'Main page'
        for (let i = 0; i < cards.default[navID[clickNav]].length; i += 1) {
          oneCard[i].classList.remove('kidsCard')
          oneCard[i].classList.remove('playCard')
          cardText[i].classList.remove('none')
          createImages[i].classList.add('main-card-pic')
          createImages[i].classList.remove('playImage')
          createImages[i].classList.remove('card-pic')
          createImages[i].src = cards.default[navID[key]][i].image
          cardText[i].innerText = cards.default[navID[key]][i].word
          createImages[i].removeAttribute('data-word')
          audioData[i].removeAttribute('data-word')
        }
        but.forEach((elemBut) => {
          elemBut.classList.add('none')
        })
      } else {
        const pageTitle = document.querySelector('#main-title')
        pageTitle.innerHTML = cards.default[0][navID[clickNav] - 1].word
        for (let i = 0; i < cards.default[navID[clickNav]].length; i += 1) {
          oneCard[i].removeAttribute('data-category')
          oneCard[i].classList.add('kidsCard')
          createImages[i].classList.remove('main-card-pic')
          createImages[i].classList.add('card-pic')
          createImages[i].classList.remove('playImage')
          createImages[i].removeAttribute('href')
          createImages[i].setAttribute('data-word', cards.default[navID[key]][i].word)
          createImages[i].src = cards.default[navID[key]][i].image
          cardText[i].innerText = cards.default[navID[key]][i].word
          audio[i].setAttribute('src', cards.default[navID[key]][i].audioSrc)
          audioData[i].setAttribute('data-word', cards.default[navID[key]][i].word)
          cardText[i].setAttribute('data-translate', cards.default[navID[key]][i].translation)
          cardText[i].setAttribute('data-word', cards.default[navID[key]][i].word)
        }
        but.forEach((elemBut) => {
          elemBut.classList.remove('none')
        })
      }
    }
  }
}
