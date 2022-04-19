import LinkedList from '../linkedList';
import { wrapper, btn } from '..';


const apiKey = "AIzaSyDtkb7Y94QYrpoWiQ78KkqKv_Bsbcb0txs"
export const list = new LinkedList()
export async function searchYoutube(e) {
    try {
        let request = e.target.value
        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=rating&quotaUser=100&maxResults=100&type=video&key=${apiKey}`)
        let results = await response.json()

        results.items.map(item => {
            list.add(item.id.videoId)
        })
        btn.classList.add('visible')
        makeVideoCards(list)

    } catch (error) {
        console.log(error)
    }
}
export function makeVideoCards() {
    if (wrapper) {
        wrapper.innerHTML = ''
    }
    for (let i = 1; i <= list.size(); i++) {
        let videoWrapper = document.createElement('div')
        videoWrapper.className = 'video-wrapper'
        wrapper.appendChild(videoWrapper)
        let videoIframe = document.createElement('iframe')
        videoIframe.className = 'video'
        videoWrapper.appendChild(videoIframe)
        if (list.elementAt(i)) {
            let videoId = list.elementAt(i).data
            videoIframe.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }
    }
}


