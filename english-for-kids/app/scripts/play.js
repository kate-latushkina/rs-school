module.exports = function checkPlay() {
  const repeatGame = document.querySelector('.repeatButtonGame')
  repeatGame.classList.add('none')
  const kidsCard = document.querySelectorAll('.kidsCard')
  const startGame = document.querySelector('.startGame')
  kidsCard.forEach((kids) => {
    if (kids.classList.contains('cardsBG-play') || kids.classList.contains('kidsCard')) {
      kids.classList.add('playCard')
      kids.childNodes[1].classList.add('none')
      kids.childNodes[3].classList.add('none')
      startGame.classList.remove('none')
    }
    if (kids.classList.contains('cardsBG-train')) {
      kids.classList.remove('playCard')
      kids.childNodes[1].classList.remove('none')
      kids.childNodes[3].classList.remove('none')
      startGame.classList.add('none')
    }
  })
}
