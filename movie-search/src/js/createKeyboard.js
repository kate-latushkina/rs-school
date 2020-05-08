import arrayLetters from './button';

function createKeyboard() {
  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en');
  }
  const lang = localStorage.getItem('lang');
  const keyboard = document.querySelector('.keyboard')
  let line = document.createElement('div');
    arrayLetters.forEach(key => {
      const keyButton = document.createElement('button');
      keyButton.classList.add(key.width);
      keyButton.classList.add('key-but');
      keyButton.classList.add(key.code);
      keyButton.classList.add(key.type);
      keyButton.innerHTML = key.text[lang];
      const lastKeyInLine = key.code;
      if (lastKeyInLine === 'Backquote' || lastKeyInLine === 'Tab' || lastKeyInLine === 'CapsLock' || lastKeyInLine === 'ShiftLeft' || lastKeyInLine === 'ControlLeft') {
        line = document.createElement('div');
        keyboard.appendChild(line)
        line.classList.add('line')
        line.appendChild(keyButton);
      } else {
        line.appendChild(keyButton);
      }
    });
}
export default createKeyboard