function changeTimeZone(zoneName, lang) {
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
  setInterval(() => {
    document.querySelector('.time').innerHTML = new Date().toLocaleString(lang, options)
  }, 1000)
}
export default changeTimeZone
