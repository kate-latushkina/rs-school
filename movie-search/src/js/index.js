import '../css/style.scss'

import searchMovies from './searchMovies'
import randomFilms from './randomFilms'
import arrayLetters from './button'
import clickShift from './shiftKey'
import createKeyboard from './createKeyboard'
import changeLanguage from './changeLanguage'

window.addEventListener('load', () => {
  randomFilms()
})

const keyCapsLock = 'CapsLock'
const keyLanguage = 'En/Ru'
const keyTab = 'Tab'
const keyBackspace = 'Backspace'
const keyShift = 'Shift'
const keyCtrl = 'Ctrl'
const keyENTER = 'ENTER'
const keyAlt = 'Alt'
const keyLeft = '◄'
const keyRight = '►'
const keyUp = '▲'
const keyDown = '▼'

const keyboard = document.querySelector('.keyboard')
const button = document.querySelector('.search-button')
button.addEventListener('click', () => {
  searchMovies()
  keyboard.classList.add('none')
})

const input = document.querySelector('.search-input')
document.querySelector('.clear-img-input').addEventListener('click', () => {
  input.value = ''
})

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    searchMovies()
  }
})
document.addEventListener('click', (e) => {
  if (e.srcElement.innerText === keyENTER) {
    searchMovies()
    keyboard.classList.add('none')
  }
})

document.querySelector('.swiper-wrapper').addEventListener('click', (event) => {
  const parent = event.target.offsetParent
  if (event.target.classList.contains('reverse')) {
    parent.childNodes[5].classList.remove('none')
    parent.classList.add('flip-card')
    event.target.classList.add('none')
    parent.childNodes[0].classList.add('transform')
    parent.childNodes[1].classList.add('opacity')
    parent.childNodes[2].classList.add('opacity')
    parent.childNodes[3].classList.add('opacity')
    event.target.classList.remove('reverse')
  }
  parent.addEventListener('mouseleave', () => {
    if (parent.classList.contains('flip-card')) {
      parent.classList.remove('flip-card')
      event.target.classList.add('reverse')
      event.target.classList.remove('none')
      parent.classList.remove('flip-card-back')
      parent.childNodes[0].classList.remove('transform')
      parent.childNodes[1].classList.remove('opacity')
      parent.childNodes[2].classList.remove('opacity')
      parent.childNodes[3].classList.remove('opacity')
      parent.childNodes[5].classList.add('none')
    }
  })
})

document.querySelector('.keyboard-img-input').addEventListener('click', () => {
  if (keyboard.childNodes.length === 0) {
    createKeyboard()
  }
  if (keyboard.classList.contains('none') === false) {
    keyboard.classList.add('none')
  }
  else {
    keyboard.classList.remove('none')
  }
})

let lang = localStorage.getItem('lang')

keyboard.addEventListener('mousedown', (elem) => {
  const keyButton = document.querySelectorAll('.key-but')
  const capsLock = document.querySelector('.CapsLock')
  const languages = {
    EN: 'en',
    RU: 'ru',
  }
  const elemCode = elem.srcElement.textContent
  if (elem.which === 1) {
    
    // CapsLock
    if (elemCode === keyCapsLock) {
      if (capsLock.classList.contains('button-active')) {
        elem.target.classList.remove('button-active')
        for (let i = 0; i < keyButton.length; i += 1) {
          keyButton[i].innerHTML = arrayLetters[i].text[lang]
        }
      } else {
        elem.target.classList.add('button-active')
        for (let i = 0; i < keyButton.length; i += 1) {
          keyButton[i].innerHTML = arrayLetters[i].shiftText[lang]
        }
      }
    }

    // Win change language
    if (elemCode === keyLanguage) {
      changeLanguage(languages)
      lang = localStorage.getItem('lang')
      for (let i = 0; i < keyButton.length; i += 1) {
        keyButton[i].innerHTML = arrayLetters[i].text[lang]
      }
    }

    // Tab
    if (elemCode === keyTab) {
      elem.preventDefault()
      input.value += '\t'
    }

    // Shift
    if (elemCode === keyShift) {
      clickShift(keyButton, elem, lang)
      elem.target.classList.add('button-active')
    }

    // arrows
    if (elemCode === keyLeft) {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== 0) {
        input.selectionStart -= 1
        input.selectionEnd -= 1
      }
    }
    if (elemCode === keyRight) {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== input.value.length) {
        input.selectionStart += 1
        input.selectionEnd += 0
      }
    }
    if (elemCode === keyUp) {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== 0) {
        input.selectionStart -= 81
        input.selectionEnd -= 81
      }
    }
    if (elemCode === keyDown) {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== input.value.length) {
        input.selectionStart += 81
        input.selectionEnd += 0
      }
    }

    // Backspace
    if (elemCode === keyBackspace) {
      elem.target.classList.add('button-active')
      input.value = input.value.slice(0, -1)
    } else {
      if (elemCode !== keyCapsLock && elemCode !== keyBackspace && elemCode !== keyCtrl && elemCode !== keyENTER && elemCode !== keyTab && elemCode !== keyAlt && elemCode !== keyLanguage && elemCode !== keyShift) {
        for (let i = 0; i < keyButton.length; i += 1) {
          if (elemCode === arrayLetters[i].text[lang]) {
            input.value += arrayLetters[i].text[lang]
            elem.target.classList.add('button-active')
          } if (capsLock.classList.contains('button-active') && elemCode === arrayLetters[i].shiftText[lang]) {
            input.value += arrayLetters[i].shiftText[lang]
            elem.target.classList.add('button-active')
          }
        }       
      }
      if (elemCode === keyCtrl || elemCode === keyENTER || elemCode === keyTab || elemCode === keyAlt || elemCode === keyLanguage) {
        elem.target.classList.add('button-active')
      }
    }
  }
})

keyboard.addEventListener('mouseout', (elem) => {
  const elemCode = elem.srcElement.outerText
  if (elemCode !== keyCapsLock && elemCode !== keyShift) {
    elem.target.classList.remove('button-active')
  }
})

keyboard.addEventListener('mouseup', (elem) => {
  const elemCode = elem.srcElement.outerText
  if (elemCode !== keyCapsLock) {
    elem.target.classList.remove('button-active')
  }
  if (elemCode === keyShift) {
    const keyBut = document.querySelectorAll('.key-but')
    for (let i = 0; i < keyBut.length; i += 1) {
      if (keyBut[i].textContent === arrayLetters[i].shiftText[lang]) {
        keyBut[i].innerHTML = arrayLetters[i].text[lang]
      }
    }
  }
})
