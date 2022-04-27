import LinkedList from "../linkedList"
import { wrapperFavorite } from ".."

export const favoriteList = new LinkedList()

export function makeFavoriteVideoCards() {
   JSON.parse(localStorage.getItem('myFavoriteList')).map(item => 
        favoriteList.addAt(0, item)
        ) 
        console.log(favoriteList)
        let i = 1
        let size = Array.from(document.querySelectorAll('.video-favorite')).length
        if (wrapperFavorite) {
        i = size
      }
    console.log(i)
    for(i; i<=favoriteList.size()-1; i++) {
        let videoFavorite = document.createElement('div')
        videoFavorite.className = 'video-favorite'
        wrapperFavorite.appendChild(videoFavorite)
        let videoIframe = document.createElement('iframe');
        let optionsBlock = document.createElement('div')
        optionsBlock.className='option-block'
        let arrowUp = document.createElement('i')
        arrowUp.className= "fa-solid fa-circle-up" 
        let arrowDown = document.createElement('i')
        arrowDown.className= "fa-solid fa-circle-down"
        let btnDelete = document.createElement('button')
        btnDelete.className = 'btn-delete'
        let garbage = document.createElement('i')
        garbage.className = "fa-solid fa-trash"
        garbage.classList.add = 'garbage'
       
        videoFavorite.appendChild(optionsBlock)
        optionsBlock.appendChild(arrowUp)
        optionsBlock.appendChild(arrowDown)
        btnDelete.appendChild(garbage)
        optionsBlock.appendChild(btnDelete)
        videoIframe.className = 'video'
        videoFavorite.appendChild(videoIframe)
       
        if (favoriteList.elementAt(i)) {
            let videoId = favoriteList.elementAt(i)
            btnDelete.id = favoriteList.elementAt(i)
            videoIframe.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }
            
      
    }
    }  Array.from(document.querySelectorAll('.btn-delete'), item => {
        item.addEventListener('click', event => {
        console.log(event.target.value)
        })
    })
          





   
