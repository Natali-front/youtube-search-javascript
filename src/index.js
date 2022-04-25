import {searchYoutube} from './youtube-list/youtube'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { makeFavoriteList, makeFavoriteVideoCards } from './favorites/favorites'


export const wrapper = document.querySelector('.wrapper')
export const wrapperFavorite = document.querySelector('.favorite-wrapper')
document.getElementById('request').addEventListener('change', searchYoutube)

makeFavoriteList()
makeFavoriteVideoCards()

wrapper.addEventListener('click',  event => {
        let arr = getIdFromLocalStorage()
        JSON.parse(localStorage.getItem('myFavoriteList'))
        arr.push(event.target.id)
        localStorage.setItem('myFavoriteList', JSON.stringify(arr))
        makeFavoriteList()
        makeFavoriteVideoCards()
})
  function getIdFromLocalStorage() {
      return JSON.parse(localStorage.getItem('myFavoriteList') || '[]')
  }
