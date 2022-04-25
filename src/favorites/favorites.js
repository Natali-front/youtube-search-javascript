import LinkedList from "../linkedList"
import { wrapperFavorite } from ".."

export const favoriteList = new LinkedList()

export function makeFavoriteList() {
   JSON.parse(localStorage.getItem('myFavoriteList')).map(item => 
    favoriteList.add(item)
    )
    console.log(favoriteList)
}
export function makeFavoriteVideoCards() {
    if(wrapperFavorite) {
        wrapperFavorite.innerHTML= ''
    }
    for(let i=1; i<=favoriteList.size(); i++) {
        let videoFavorite = document.createElement('div')
        videoFavorite.className = 'video-favorite'
        wrapperFavorite.appendChild(videoFavorite)
        let videoIframe = document.createElement('iframe');
        let garbage = document.createElement('i')
        garbage.className = "fa-solid fa-trash"
        let arrowDown = document.createElement('i')
        arrowDown.className= "fa-solid fa-circle-down"
        let arrowUp = document.createElement('i')
        arrowUp.className= "fa-solid fa-circle-up"
        
        videoFavorite.appendChild(garbage)
        videoFavorite.appendChild(arrowDown)
        videoFavorite.appendChild(arrowUp)
        videoIframe.className = 'video'
        videoFavorite.appendChild(videoIframe)
       
        if (favoriteList.elementAt(i)) {
            let videoId = favoriteList.elementAt(i).data
            garbage.id = favoriteList.elementAt(i).data
            videoIframe.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }    
    }
}





   
