import weekTranslate from './weekDaysTranslate'

function changeBelTime(lang, options) {
  let dateFull = new Date().toLocaleString(lang, options)
  if (lang === 'be') {
    const dateLang = dateFull.replace(/,/g, '').split(' ')
    const dayLang = dateLang[0]
    const monthLang = dateLang[2]
    dateFull = dateFull.replace(dayLang, weekTranslate.weekBe.short[dayLang])
    dateFull = dateFull.replace(monthLang, weekTranslate.monthBe[monthLang])
  }
  return dateFull
}
export default changeBelTime
