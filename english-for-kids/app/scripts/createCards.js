module.exports = function createCards(cards) {
  const pageTitle = document.querySelector('#main-title')
  pageTitle.innerHTML = 'Main page'
  for (let i = 0; i < cards.default[0].length; i += 1) {
    const createCard = document.createElement('a')
    document.querySelector('main .container').appendChild(createCard)
    createCard.classList.add('mainCards')
    createCard.classList.add('cardsBG-train')
    const createImages = document.createElement('img')
    createCard.appendChild(createImages)
    createImages.classList.add('main-card-pic')
    createImages.setAttribute('href', cards.default[0][i].word)
    createImages.src = cards.default[0][i].image
    const cardText = document.createElement('p')
    createCard.appendChild(cardText)
    cardText.innerText = cards.default[0][i].word
    cardText.classList.add('card-text')
    const audio = document.createElement('audio')
    createCard.appendChild(audio)
    const source = document.createElement('source')
    audio.appendChild(source)
    source.setAttribute('src', cards.default[0][i].audioSrc)
    const reverseButton = document.createElement('button')
    reverseButton.classList.add('none')
    reverseButton.classList.add('reverse')
    createCard.appendChild(reverseButton)
  }
  const div = document.createElement('div')
  const startGame = document.createElement('button')
  document.querySelector('main').appendChild(div)
  div.appendChild(startGame)
  div.classList.add('divGame')
  startGame.classList.add('startGame')
  startGame.classList.add('none')
  startGame.innerHTML = 'Start game'
  const imgButGame = document.createElement('img')
  startGame.appendChild(imgButGame)
  imgButGame.setAttribute('src', '../assets/images/repeat.svg')
  imgButGame.classList.add('none')
  imgButGame.classList.add('repeatButtonGame')
}
