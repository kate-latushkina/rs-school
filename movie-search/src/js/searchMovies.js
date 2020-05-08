import createCards from './createCards'
import deleteCards from './deleteCards'
// import translate from'./translate'
import mySwiper from './swiper'

function searchMovies(pageNumber = 1) {
  document.querySelector('.here').classList.add('spinner')
  document.querySelector('.here').classList.add('spinner-primary')
  document.querySelector('.info').innerHTML = ''
  const slideArray = []
  const input = document.querySelector('.search-input')
  let search = input.value
  mySwiper.on('slideChange', () => {
    if (mySwiper.activeIndex === document.querySelector('.swiper-wrapper').childNodes.length-5) {
      pageNumber += 1
      searchMovies(pageNumber)
    }
  })
  // if (/[А-я]/i.test(search)) {
  //   // translate(search)
  //   const yandexKey = 'trnsl.1.1.20200506T083023Z.a3ed5b83c5426c6d.b9feb435116ee8a7b87d2f4f54211dc49364c41b'
  //   fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandexKey}&text=${search}&lang=ru-en`) 
  //     .then((resp) => resp.json())
  //     .then((dataTranslate) => {
  //       const translateText = dataTranslate.text.toString()
  //       document.querySelector('.info').innerHTML = `Showing results for "${translateText}"`
        
  //       console.log(search)
  //     })
  //     search = translateText
  //   console.log(search)
  // }

  console.log(search)
  fetch(`https://www.omdbapi.com/?s=${search}&page=${pageNumber}&apikey=624b2fc6`)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.Error) {
        document.querySelector('.info').innerHTML = `No result for "${search}"`
      } else {
        if (pageNumber === 1) {
          deleteCards()
        }
        console.log(search)
        const arr = []
        data.Search.forEach((film) => {
          arr.push(film.Title)
        })
        arr.map((film) => {
          fetch(`https://www.omdbapi.com/?t=${film}&page=${pageNumber}&apikey=624b2fc6`)
            .then((resp) => resp.json())
            .then((dataFilm) => {
              createCards(dataFilm, slideArray)
              mySwiper.appendSlide(slideArray)
            })
            document.querySelector('.swiper-pagination').innerHTML = `${pageNumber} / ${Math.ceil(data.totalResults/10)}`
            
        })
      }
      document.querySelector('.here').classList.remove('spinner')
      document.querySelector('.here').classList.remove('spinner-primary')
    })
}
export default searchMovies