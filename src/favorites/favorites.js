import LinkedList from "../linkedList"
import { wrapperFavorite } from ".."

export const favoriteList = new LinkedList()

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

        if (favoriteList.elementAt(i)) {
            let videoId = favoriteList.elementAt(i)
            btnDelete.id = favoriteList.elementAt(i)
            videoIframeFav.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }
    }
}
export function redrawFavorite(favoriteList) {
    console.log(favoriteList)
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







