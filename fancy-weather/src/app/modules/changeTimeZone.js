function changeTimeZone(zoneName, lang) {
  clearInterval(+localStorage.getItem('interval'))
  const time = document.querySelector('.time')
  const options = {
    timeZone: zoneName,
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }

  const interval = setInterval(() => {
    time.innerHTML = new Date().toLocaleString(lang, options)
  }, 1000)
  localStorage.setItem('interval', interval)
}
export default changeTimeZone
