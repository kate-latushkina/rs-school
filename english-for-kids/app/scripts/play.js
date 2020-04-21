module.exports = function checkPlay() {
  document.querySelector('.repeatButtonGame').classList.add('none')
  const kidsCard = document.querySelectorAll('.kidsCard')
  const startGame = document.querySelector('.startGame')
  const repeatGame = document.querySelector('.repeatButtonGame')
  const cardPic = document.querySelectorAll('.card-pic')
  const audioArray = []
  kidsCard.forEach((kids) => {
    if (kids.classList.contains('cardsBG-play') && kids.classList.contains('kidsCard')) {
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
    // console.log(kids)
  })

  startGame.addEventListener('click', () => {
    // console.log(1212)
    document.querySelector('.repeatButtonGame').classList.remove('none')
    startGame.classList.add('none')
    const starsPlace = document.createElement('div')
    starsPlace.classList.add('starPlace')
    document.querySelector('#main-title').after(starsPlace)
    audioGame()
  })

  repeatGame.addEventListener('click', () => {
    audioArray[audioArray.length - 1].play()
  })

  function audioGame() {
    for (let i = 0; i < kidsCard.length; i += 1) {
      const audioSRC = kidsCard[i].querySelector('source').getAttribute('src')
      kidsCard[i].querySelector('audio').setAttribute('src', audioSRC)
      const audio = kidsCard[i].querySelector('audio')
      audioArray.push(audio)
    }
    audioArray.sort(() => Math.random() - 0.5)

    audioArray[audioArray.length - 1].play()


    cardPic.forEach((pic) => {
      pic.addEventListener('click', () => {
        if (audioArray.length !== 0) {
          if (audioArray[audioArray.length - 1].dataset.word === pic.dataset.word) {
            // правильно
            document.getElementById('correct').play()
            const star = document.createElement('img')
            star.setAttribute('src', './assets/images/star-win.svg')
            document.querySelector('.starPlace').appendChild(star)
            pic.classList.add('playImage')
            audioArray.pop()
            if (audioArray.length !== 0) {
              audioArray[audioArray.length - 1].play()
            }
          } else if (pic.classList.contains('playImage') !== true) {
            document.getElementById('error').play()
            const starLouse = document.createElement('img')
            starLouse.setAttribute('src', './assets/images/star.svg')
            starLouse.setAttribute('data-louse', 'louse')
            document.querySelector('.starPlace').appendChild(starLouse)
          }
        }
        if (audioArray.length === 0) {
          // выигрыш или проигрыш
          let count = 0
          document.querySelectorAll('.starPlace img').forEach((noneStar) => {
            if (noneStar.dataset.louse) {
              count += 1
            }
          })
          if (count === 0) {
            document.querySelector('#main').classList.add('none')
            document.getElementById('win').play()
            // const winImg = document.createElement('div')
            document.querySelector('#main').classList.add('winImg')
            // winImg.classList.add('winImg')
          } else {
            document.getElementById('louse').play()
            document.querySelector('#main').innerHTML = '<img src="./assets/images/failure.jpg">'
          }
        }
      })
    })
  }
}
