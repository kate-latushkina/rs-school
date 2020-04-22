module.exports = function audioGame() {
  const repeatGame = document.querySelector('.repeatButtonGame')
  const kidsCard = document.querySelectorAll('.kidsCard')
  // const startGame = document.querySelector('.startGame')
  // const cardPic = document.querySelectorAll('.card-pic')
  const audioArray = []
  const audioSrcItems = document.querySelectorAll('.kidsCard source')
  
  for (let i = 0; i < audioSrcItems.length; i += 1) {
    const audioSRC = audioSrcItems[i].getAttribute('src')
    kidsCard[i].querySelector('audio').setAttribute('src', audioSRC)
    const audio = kidsCard[i].querySelector('audio')
    audioArray.push(audio)
  }
  audioArray.sort(() => Math.random() - 0.5)
  audioArray[audioArray.length - 1].play()

  repeatGame.addEventListener('click', () => {
    audioArray[audioArray.length - 1].play()
  })


  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.classList.contains('card-pic')) {
      if (e.target.dataset.word === audioArray[audioArray.length - 1].dataset.word) {
        document.querySelector('#correct').play()
        audioArray.pop()
        e.target.classList.add('playImage')
        const star = document.createElement('img')
        star.setAttribute('src', './assets/images/star-win.svg')
        document.querySelector('.starPlace').appendChild(star)

        if (audioArray.length !== 0) {
          audioArray[audioArray.length - 1].play()
        }
        if (audioArray.length === 0) {
          // выигрыш или проигрыш
          let count = 0
          document.querySelectorAll('.starPlace img').forEach((noneStar) => {
            if (noneStar.dataset.lose) {
              count += 1
            }
          })
          if (count === 0) {
            document.getElementById('win').play()
            document.querySelector('#main .container').innerHTML = `<img src="./assets/images/success.jpg">`
            const p = document.createElement('div')
            p.classList.add('card-text')
            p.style.width = '100%'
            p.innerHTML = `You win <br> Number of errors: ${count}`
            document.querySelector('#main .container').after(p)
          } else {
            document.getElementById('lose').play()
            document.querySelector('#main .container').innerHTML = `<img src="./assets/images/failure.jpg">`
            const p = document.createElement('div')
            p.classList.add('card-text')
            p.style.width = '100%'
            p.innerHTML = `You lose <br> Number of errors: ${count}`
            document.querySelector('#main .container').after(p)
          }
          repeatGame.remove(repeatGame)
          document.querySelector('#main-title').remove(document.querySelector('#main-title'))
          document.querySelectorAll('.starPlace img').forEach((img) => {
            img.remove(img)
          })
          setTimeout(() => {
            location.reload()
          }, 3000)
        }
      } else {
        document.getElementById('error').play()
        const starLouse = document.createElement('img')
        starLouse.setAttribute('src', './assets/images/star.svg')
        starLouse.setAttribute('data-lose', 'lose')
        document.querySelector('.starPlace').appendChild(starLouse)
      }
    }
  })
}
