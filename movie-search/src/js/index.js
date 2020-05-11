import '../css/style.scss'

import searchMovies from './searchMovies'
import randomFilms from './randomFilms'
import arrayLetters from './button';
import clickShift from './shiftKey';
import createKeyboard from './createKeyboard';
import changeLanguage from './changeLanguage';

window.addEventListener('load', () => {
  randomFilms()
})
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
  if (e.srcElement.innerText === 'ENTER') {
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

let lang = localStorage.getItem('lang');

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
    if (elemCode === 'CapsLock') {
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
    if (elemCode === 'En/Ru') {
      changeLanguage(languages)
      lang = localStorage.getItem('lang')
      for (let i = 0; i < keyButton.length; i += 1) {
        keyButton[i].innerHTML = arrayLetters[i].text[lang]
      }
    }

    // Tab
    if (elemCode === 'Tab') {
      elem.preventDefault()
      input.value += '\t'
    }

    // Shift
    if (elemCode === 'Shift') {
      clickShift(keyButton, elem, lang)
      elem.target.classList.add('button-active')
    }

    // arrows
    if (elemCode === '◄') {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== 0) {
        input.selectionStart -= 1
        input.selectionEnd -= 1
      }
    }
    if (elemCode === '►') {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== input.value.length) {
        input.selectionStart += 1
        input.selectionEnd += 0
      }
    }
    if (elemCode === '▲') {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== 0) {
        input.selectionStart -= 81
        input.selectionEnd -= 81
      }
    }
    if (elemCode === '▼') {
      elem.target.classList.add('button-active')
      if (input.selectionStart !== input.value.length) {
        input.selectionStart += 81
        input.selectionEnd += 0
      }
    }

    // Backspace
    if (elemCode === 'Backspace') {
      elem.target.classList.add('button-active')
      input.value = input.value.slice(0, -1)
    } else {
      if (elemCode !== 'CapsLock' && elemCode !== 'Backspace' && elemCode !== 'Ctrl' && elemCode !== 'ENTER' && elemCode !== 'Tab' && elemCode !== 'Alt' && elemCode !== 'En/Ru' && elemCode !== 'Shift') {
        for (let i = 0; i < keyButton.length; i += 1) {
          if (elemCode === arrayLetters[i].text[lang]) {
            input.value += arrayLetters[i].text[lang]
            elem.target.classList.add('button-active')
          }
          if (elemCode === arrayLetters[i].shiftText[lang]) {
            input.value += arrayLetters[i].shiftText[lang]
            elem.target.classList.add('button-active')
          }
        }       
      }
      if (elemCode === 'Ctrl' || elemCode === 'ENTER' || elemCode === 'Tab' || elemCode === 'Alt' || elemCode === 'En/Ru') {
        elem.target.classList.add('button-active')
      }
    }
  }
})

keyboard.addEventListener('mouseout', (elem) => {
  const elemCode = elem.srcElement.outerText
  if (elemCode !== 'CapsLock' && elemCode !== 'Shift') {
    elem.target.classList.remove('button-active')
  }
})

keyboard.addEventListener('mouseup', (elem) => {
  const elemCode = elem.srcElement.outerText
  if (elemCode !== 'CapsLock') {
    elem.target.classList.remove('button-active')
  }
  if (elemCode === 'Shift') {
    const keyBut = document.querySelectorAll('.key-but')
    for (let i = 0; i < keyBut.length; i += 1) {
      if (keyBut[i].textContent === arrayLetters[i].shiftText[lang]) {
        keyBut[i].innerHTML = arrayLetters[i].text[lang]
      }
    }
  }
})

// alert('Привет, проверяющий. Если возникла ошибка с вводом текста с клавиатуры, то измени язык с помощью виртуальной клавиатуры (En/Ru) или перезагрузи страницу и все заработатет. Если возникнут вопросы по поводу работы, то пиши в телеграм @ekaterina-latushkina')