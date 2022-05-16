import { searchYoutube } from './youtube-list/youtube'
import { fromEvent } from 'rxjs'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { makeFavoriteVideoCards,addToFavoriteList, functionToFavorite, deleteAllFav } from './favorites/favorites'


export const wrapper = document.querySelector('.wrapper')
export const wrapperFavorite = document.querySelector('.favorite-wrapper')
const wrapperBlockFav = document.querySelector('.wrapper-fav')

fromEvent(document.getElementById('request'), 'change')
.subscribe( searchYoutube)

if(localStorage.getItem('myFavoriteList')){
  makeFavoriteVideoCards()
}
fromEvent(wrapper, 'click')
.subscribe(addToFavoriteList)


fromEvent(wrapperFavorite, 'click')
.subscribe(functionToFavorite)

fromEvent(wrapperBlockFav, 'click')
.subscribe(deleteAllFav)

