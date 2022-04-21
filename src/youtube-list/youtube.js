import LinkedList from '../linkedList';
import { wrapper, btn } from '..';



const apiKey = "AIzaSyDtkb7Y94QYrpoWiQ78KkqKv_Bsbcb0txs"
let nextPageToken = null
let request = null
let amount = 9
export const list = new LinkedList()

export async function searchYoutube(e) {
    let request = e.target.value
    try {
        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=rating&quotaUser=100&maxResults=${amount}&type=video&key=${apiKey}&singleEvents=true`)
        let results = await response.json()

        results.items.map(item => {
            list.add(item.id.videoId)
        })
        nextPageToken = results.nextPageToken
        console.log(nextPageToken)
        makeVideoCards(list)

    } catch (error) {
        console.log(error)
    }
}
export function makeVideoCards() {
    if (wrapper) {
        wrapper.innerHTML=''
    }
        for (let i = 1; i <= list.size(); i++) {
        let videoWrapper = document.createElement('div')
        videoWrapper.className = 'video-wrapper'
        wrapper.appendChild(videoWrapper)
        let videoIframe = document.createElement('iframe')
        let heart = document.createElement('object')
        heart.data = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAyMS41OTNjLTUuNjMtNS41MzktMTEtMTAuMjk3LTExLTE0LjQwMiAwLTMuNzkxIDMuMDY4LTUuMTkxIDUuMjgxLTUuMTkxIDEuMzEyIDAgNC4xNTEuNTAxIDUuNzE5IDQuNDU3IDEuNTktMy45NjggNC40NjQtNC40NDcgNS43MjYtNC40NDcgMi41NCAwIDUuMjc0IDEuNjIxIDUuMjc0IDUuMTgxIDAgNC4wNjktNS4xMzYgOC42MjUtMTEgMTQuNDAybTUuNzI2LTIwLjU4M2MtMi4yMDMgMC00LjQ0NiAxLjA0Mi01LjcyNiAzLjIzOC0xLjI4NS0yLjIwNi0zLjUyMi0zLjI0OC01LjcxOS0zLjI0OC0zLjE4MyAwLTYuMjgxIDIuMTg3LTYuMjgxIDYuMTkxIDAgNC42NjEgNS41NzEgOS40MjkgMTIgMTUuODA5IDYuNDMtNi4zOCAxMi0xMS4xNDggMTItMTUuODA5IDAtNC4wMTEtMy4wOTUtNi4xODEtNi4yNzQtNi4xODEiLz48L3N2Zz4="
        heart.className = 'heart'
        videoWrapper.appendChild(heart)
        videoIframe.className = 'video'
        videoWrapper.appendChild(videoIframe)
       
        if (list.elementAt(i)) {
            let videoId = list.elementAt(i).data
            videoIframe.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }    
    }
    
    
    let btnLoadMore = document.createElement('button')
    let arrowDown = document.createElement('object')
    arrowDown.data = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'/%3E%3C/svg%3E"
    arrowDown.className = 'arrow-down'
    btnLoadMore.innerHTML='LOAD MORE'
        btnLoadMore.appendChild(arrowDown)
        btnLoadMore.className="btn-load-more"
        wrapper.appendChild(btnLoadMore)
        btnLoadMore.addEventListener('click', makePagination)
}

    


async function makePagination() {
    try {
        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=rating&quotaUser=100&maxResults=9&type=video&key=${apiKey}&singleEvents=true&pageToken=${nextPageToken}`)
        let results = await response.json()

        results.items.map(item => {
            list.add(item.id.videoId)
        })
        nextPageToken = results.nextPageToken
        makeVideoCards(list)

    } catch (error) {
        console.log(error)
    }
}

