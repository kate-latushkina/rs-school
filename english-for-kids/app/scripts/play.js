const audioArray = require('./audioGame')

module.exports = function checkPlay() {
  const repeatGame = document.querySelector('.repeatButtonGame')
  repeatGame.classList.add('none')
  const kidsCard = document.querySelectorAll('.kidsCard')
  const startGame = document.querySelector('.startGame')
  kidsCard.forEach((kids) => {
    if (kids.classList.contains('cardsBG-play') || kids.classList.contains('kidsCard')) {
      audioArray.length = 0
      kids.classList.add('playCard')
      kids.childNodes[1].classList.add('none')
      kids.childNodes[3].classList.add('none')
      startGame.classList.remove('none')
      document.querySelectorAll('.starPlace img').forEach((img) => {
        img.remove(img)
      })
      document.querySelectorAll('.card-pic').forEach((img) => {
        img.classList.remove('playImage')
      })
    }
    if (kids.classList.contains('cardsBG-train')) {
      audioArray.length = 0
      kids.classList.remove('playCard')
      kids.childNodes[1].classList.remove('none')
      kids.childNodes[3].classList.remove('none')
      startGame.classList.add('none')
    }
  })
}
