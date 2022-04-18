const apiKey = "AIzaSyDtkb7Y94QYrpoWiQ78KkqKv_Bsbcb0txs"
document.getElementById('request').addEventListener('change', searchYoutube)
const btn = document.querySelector('.sort')
btn.addEventListener('click', function () {
    setTimeout(makeVideoCards(bubbleSort(list)), 1000)
})


class LinkedList {
    constructor() {
        this.head = null
        let length = 0
        this.size = function () {
            return length
        }

        this.add = function (data) {
            const node = { data, next: null }
            if (this.head === null) {
                this.head = node
            } else {
                let currentNode = this.head
                while (currentNode.next) {
                    currentNode = currentNode.next
                }
                currentNode.next = node
            }
            length++
        }
        this.elementAt = function (index) {
            let currentNode = this.head
            let count = 0
            while (count < index) {
                count++
                currentNode = currentNode.next
            }
            return currentNode
        }
        this.remove = function (element) {
            let currentNode = this.head
            let previousNode
            if (currentNode.element !== element) {
                this.head = currentNode.next
            } else {
                while (currentNode.element !== element) {
                    previousNode = currentNode
                    currentNode = currentNode.next
                }
                previousNode.next = currentNode.next
            }
            length--
        }
    }
}

const list = new LinkedList()

function swap(list, a, b) {
    let temp = list.elementAt(a).data;
    list.elementAt(a).data = list.elementAt(b).data;
    list.elementAt(b).data = temp
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function bubbleSort(list, compare = defaultCompare) {
    for (let i = 0; i < list.size(); i++) {
        for (let j = 0; j < list.size() - 1 - i; j++) {
            if (compare(list.elementAt(j).data, list.elementAt(j + 1).data) === Compare.BIGGER_THAN) {
                swap(list, j, j + 1);
            }
        }
    }
    console.log(list)
    return list

}

function makeVideoCards() {
    let wrapper = document.querySelector('.wrapper')
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

async function searchYoutube(e) {

    let wrapper = document.querySelector('.wrapper')
    if (wrapper) {
        wrapper.innerHTML = ''
    }
    try {
        let request = e.target.value
        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=rating&quotaUser=100&maxResults=100&type=video&key=${apiKey}`)
        let results = await response.json()
        console.log(results)
        results.items.map(item => {
            list.add(item.id.videoId)
        })
        // let listOfVideos = list.toArray()
        btn.classList.add('visible')
        makeVideoCards(list)

    } catch (error) {
        console.log(error)
    }
}





