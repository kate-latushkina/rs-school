module.exports = function checkPlay() {
  const kidsCard = document.querySelectorAll('.kidsCard')
  const startGame = document.querySelector('.startGame')
  kidsCard.forEach((kids) => {
    if (kids.classList.contains('cardsBG-play') && kids.classList.contains('kidsCard')) {
      kids.classList.add('playCard')
      kids.childNodes[1].classList.add('none')
      kids.childNodes[3].classList.add('none')
      // console.log(kids.childNodes)
      startGame.classList.remove('none')
    }
    if (kids.classList.contains('cardsBG-train')) {
      kids.classList.remove('playCard')
      kids.childNodes[1].classList.remove('none')
      kids.childNodes[3].classList.remove('none')
      startGame.classList.add('none')
      // console.log(kids.childNodes)
    }
    // console.log(kids)
  })

  startGame.addEventListener('click', () => {
    console.log(1212)
    // document.querySelector('.repeatButtonGame').classList.remove('none')
    audioGame()
  })

  function audioGame() {
    const audioArray = []
    for (let i = 0; i < kidsCard.length; i += 1) {
      const audioSRC = kidsCard[i].querySelector('source').getAttribute('src')
      kidsCard[i].querySelector('audio').setAttribute('src', audioSRC)
      const audio = kidsCard[i].querySelector('audio')
      audioArray.push(audio)
    }
    audioArray.sort(() => Math.random() - 0.5)

    for (let k = audioArray.length - 1; k > 0; k -= 1) {
      audioArray[k].play()
      if (audioArray[k]) {
        console.log(audioArray[k].src)
      }
    }
  }
}
