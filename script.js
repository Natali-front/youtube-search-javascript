const apiKey = "AIzaSyDtkb7Y94QYrpoWiQ78KkqKv_Bsbcb0txs"
document.getElementById('request').addEventListener('change', searchYoutube)


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = { data, next: null }

        if (this.tail) {
            this.tail.next = node
        }
        if (!this.head) {
            this.head = node
        }
        this.tail = node
    }
    toArray() {
        const array = []
        let current = this.head
        while (current) {
            array.push(current)
            current = current.next
        }
        return array
    }
}
const list = new LinkedList()
async function searchYoutube(e) {
    let wrapper = document.querySelector('.wrapper')
    if (wrapper) {
        wrapper.innerHTML = ''
    }
    try {
        let request = e.target.value
        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=videoCount&maxResults=100&type=video&key=${apiKey}`)
        let results = await response.json()
        console.log(results)
        results.items.map(item => {
            list.append(item.id.videoId)
        })
        for (let i = 0; i <= list.toArray().length; i++) {
            let videoWrapper = document.createElement('div')
            videoWrapper.className = 'video-wrapper'
            document.querySelector('.wrapper').appendChild(videoWrapper)
            let title = document.createElement('h3')
            let videoIframe = document.createElement('iframe')
            videoIframe.className = 'video'
            videoWrapper.appendChild(videoIframe)
            videoIframe.src = `http://www.youtube.com/embed/${list.toArray().map(item => item.data)[i]}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
        }

        console.log(list.toArray())

    } catch (error) {
        console.log(error)
    }
};