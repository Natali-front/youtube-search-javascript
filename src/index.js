import { searchYoutube } from './youtube-list/youtube'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { makeFavoriteVideoCards, favoriteList } from './favorites/favorites'


export const wrapper = document.querySelector('.wrapper')
export const wrapperFavorite = document.querySelector('.favorite-wrapper')
document.getElementById('request').addEventListener('change', searchYoutube)
makeFavoriteVideoCards()

wrapper.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.tagName === 'svg') {
    let chosenVideo = document.getElementById(event.target.id)
    if (chosenVideo.getAttribute('color') != 'red' || null) {
      chosenVideo.setAttribute('color', 'red')
      let arr = getIdFromLocalStorage()
      // JSON.parse(localStorage.getItem('myFavoriteList'))
      arr.push(event.target.id)
      localStorage.setItem('myFavoriteList', JSON.stringify(arr))
      makeFavoriteVideoCards()
    }
  }else {
    return
  }

})
function getIdFromLocalStorage() {
  return JSON.parse(localStorage.getItem('myFavoriteList') || '[]')
}
wrapperFavorite.addEventListener('click', functionToFavorite)

function functionToFavorite(event) {

  if (event.target.tagName === 'BUTTON') {
    favoriteList.remove(event.target.id)
   }
     let newArr = getIdFromLocalStorage()
    newArr.splice(newArr.indexOf(event.target.id), 1)
    localStorage.setItem('myFavoriteList', JSON.stringify(newArr))
    
  makeFavoriteVideoCards()
}