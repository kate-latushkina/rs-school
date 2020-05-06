function searchPage(pageNumber = 1) {
  // const page = document.querySelector('.page')
  const input = document.querySelector('.search-input')
  fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=624b2fc6&page=${pageNumber}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      // console.log(pageNumber)
      // console.log(page)
      
    })
}
export default searchPage