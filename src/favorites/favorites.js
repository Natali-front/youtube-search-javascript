import LinkedList from "../linkedList"
import { wrapperFavorite } from ".."

export const favoriteList = new LinkedList()

export async function addToFavoriteList(event){
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
     }
export async function makeFavoriteVideoCards() {
    let i = 0
    if (Array.from(document.querySelectorAll('.video-favorite')).length === 0 && localStorage.getItem('myFavoriteList')) {
        let newArrFavorite = JSON.parse(localStorage.getItem('myFavoriteList'))
        newArrFavorite.map(item => {
            favoriteList.add(item)
        })
    }
    if (Array.from(document.querySelectorAll('.video-favorite')).length > 0 && localStorage.getItem('myFavoriteList')) {
        let size = Array.from(document.querySelectorAll('.video-favorite')).length
        i = size
        let newArrFavorite = JSON.parse(localStorage.getItem('myFavoriteList'))
        favoriteList.add(newArrFavorite.slice(0, 1).join(' '))
    }
    if (Array.from(document.querySelectorAll('.video-favorite')).length > 0 && localStorage.getItem('myFavoriteList') == null) {
        wrapperFavorite.innerHTML = ''
    }

    for (i; i <= favoriteList.size() - 1; i++) {
        let templateFav = document.getElementById('template-favorite')
        var cloneFav = templateFav.content.cloneNode(true);
        wrapperFavorite.appendChild(cloneFav)
        let videoIframeFav = document.querySelectorAll('.video-fav')[i]
        let btnDelete = document.querySelectorAll('.btn-delete')[i]
        let arrowDown = document.querySelectorAll('.change-down')[i]
        let arrowUp = document.querySelectorAll('.change-up')[i]


        if (favoriteList.elementAt(i)) {
            let videoId = favoriteList.elementAt(i)
            btnDelete.id = favoriteList.elementAt(i)
            arrowDown.id = favoriteList.elementAt(i)
            arrowUp.id = favoriteList.elementAt(i)
            videoIframeFav.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }
    }
}
export function redrawFavorite() {

    if (wrapperFavorite) {
        wrapperFavorite.innerHTML = ''
    }
    for (let i = 0; i <= favoriteList.size() - 1; i++) {
        let templateFav = document.getElementById('template-favorite')
        var cloneFav = templateFav.content.cloneNode(true);
        wrapperFavorite.appendChild(cloneFav)
        let videoIframeFav = document.querySelectorAll('.video-fav')[i]
        let btnDelete = document.querySelectorAll('.btn-delete')[i]

        if (favoriteList.elementAt(i)) {
            let videoId = favoriteList.elementAt(i)
            btnDelete.id = favoriteList.elementAt(i)
            videoIframeFav.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }
    }
}
function getIdFromLocalStorage() {
    return JSON.parse(localStorage.getItem('myFavoriteList') || '[]')
  }

export async function functionToFavorite(event) {
    event.preventDefault()
    if (event.target.tagName === 'BUTTON' && event.target.id != "delete-all-favorite") {
      deleteOneFav()
    }
  
    if (event.target.classList.contains('change-up') && event.target.id) {
      if (localStorage.getItem('myFavoriteList').length === 1) {
        return
      }
      liftUp()
    }
      if(event.target.classList.contains('change-down') && event.target.id){
      toLowerDown()
    }
}
    export async function deleteAllFav(event) {
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
    function deleteOneFav() {
      console.log(event.target.id)
      let newArr = getIdFromLocalStorage()
      newArr.splice(newArr.indexOf(event.target.id), 1)
      localStorage.setItem('myFavoriteList', JSON.stringify(newArr))
      favoriteList.removeAt(favoriteList.indexOf(event.target.id))
      redrawFavorite()
    }
    function liftUp() {
      let newArr = getIdFromLocalStorage()
      let indexToChange = newArr.indexOf(event.target.id)
      let elementToChange = newArr.splice(indexToChange, 1).join('')
      console.log(indexToChange)
      console.log(newArr)
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
        favoriteList.remove(event.target.id)
        favoriteList.addAt(favoriteList.indexOf(event.target.id) - 1, event.target.id)
      }
      redrawFavorite(favoriteList)
    }
    function toLowerDown() {
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
      redrawFavorite(favoriteList)
      }
    







