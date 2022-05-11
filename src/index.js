import { searchYoutube } from './youtube-list/youtube'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { makeFavoriteVideoCards, favoriteList, redrawFavorite } from './favorites/favorites'


export const wrapper = document.querySelector('.wrapper')
export const wrapperFavorite = document.querySelector('.favorite-wrapper')
const wrapperBlockFav = document.querySelector('.wrapper-fav')
document.getElementById('request').addEventListener('change', searchYoutube)

if(localStorage.getItem('myFavoriteList')){
  makeFavoriteVideoCards()
}

wrapper.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.tagName === 'svg') {
    let chosenVideo = document.getElementById(event.target.id)
    if (chosenVideo.getAttribute('color') != 'red' || null) {
      chosenVideo.setAttribute('color', 'red')
      let arr = getIdFromLocalStorage()
      JSON.parse(localStorage.getItem('myFavoriteList'))
      arr.unshift(event.target.id)
      localStorage.setItem('myFavoriteList', JSON.stringify(arr))
      makeFavoriteVideoCards()
    }
  } else {
    return
  }
})

function getIdFromLocalStorage() {
  return JSON.parse(localStorage.getItem('myFavoriteList') || '[]')
}

wrapperFavorite.addEventListener('click', functionToFavorite)

async function functionToFavorite(event) {
  event.preventDefault()
  if (event.target.tagName === 'BUTTON' && event.target.id != "delete-all-favorite") {
    let newArr = getIdFromLocalStorage()
    newArr.splice(newArr.indexOf(event.target.id), 1)
    localStorage.setItem('myFavoriteList', JSON.stringify(newArr))
    favoriteList.removeAt(favoriteList.indexOf(event.target.id))
    redrawFavorite()
  }

  if (event.target.classList.contains('change-up') && event.target.id) {
    if (localStorage.getItem('myFavoriteList').length === 1) {
      return
    }
    let newArr = getIdFromLocalStorage()
    let indexToChange = newArr.indexOf(event.target.id)
    let elementToChange = newArr.splice(indexToChange, 1).join('')
    if (indexToChange >= 1) {
      newArr.splice(indexToChange - 1, 0, elementToChange)
    } else {
      newArr.push(elementToChange)
    }
    localStorage.setItem('myFavoriteList', JSON.stringify(newArr))
    if (favoriteList.indexOf(event.target.id) <= 0) {
      return
    }
    if (favoriteList.indexOf(event.target.id) >= 1) {
      favoriteList.removeAt(favoriteList.indexOf(event.target.id))
      favoriteList.addAt(favoriteList.indexOf(event.target.id) - 1, event.target.id)
    }
    console.log(favoriteList)
    redrawFavorite()
  }
  if (event.target.classList.contains('change-down') && event.target.id) {
    if (localStorage.getItem('myFavoriteList').length === 1) {
      return
    }
    let newArr = getIdFromLocalStorage()
    let indexToChange = newArr.indexOf(event.target.id)
    let elementToChange = newArr.splice(indexToChange, 1).join('')
    if (indexToChange >= 1) {
      newArr.splice(indexToChange + 1, 0, elementToChange)
    }
    localStorage.setItem('myFavoriteList', JSON.stringify(newArr))
    if (favoriteList.indexOf(event.target.id) === favoriteList.size()) {
      return
    }
    favoriteList.remove(event.target.id)
    favoriteList.addAt(favoriteList.indexOf(event.target.id), event.target.id)
    redrawFavorite()
  }
}

wrapperBlockFav.addEventListener('click', deleteAllFav)

function deleteAllFav(event) {
  if (event.target.id === "delete-all-favorite" && localStorage.getItem('myFavoriteList')) {
    localStorage.removeItem('myFavoriteList')
    for (let i = 0; i <= favoriteList.size() + 1; i++) {
      favoriteList.removeAt(i)
    }
  } else {
    return
  }
  makeFavoriteVideoCards()
}