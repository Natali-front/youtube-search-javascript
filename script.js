const apiKey = "AIzaSyDtkb7Y94QYrpoWiQ78KkqKv_Bsbcb0txs"
document.getElementById('request').addEventListener('change', searchYoutube)
const btn = document.querySelector('.sort')




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


function mergeSort(arr, compare = defaultCompare) {
    if (arr.length > 1) {
        const { length } = arr;
        const middle = Math.floor(length / 2);
        const left = mergeSort(arr.slice(0, middle), compare)
        const right = mergeSort(arr.slice(middle, length), compare)
        arr = merge(left, right, compare);
    }
    return arr;
}

function merge(left, right, compare) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compare(left[i], right[j]) === compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

function makeVideoCards(arr) {
    let wrapper = document.querySelector('.wrapper')
    if (wrapper) {
        wrapper.innerHTML = ''
    }
    for (let i = 0; i <= arr.length; i++) {
        let videoWrapper = document.createElement('div')
        videoWrapper.className = 'video-wrapper'
        wrapper.appendChild(videoWrapper)
        let title = document.createElement('h3')
        let videoIframe = document.createElement('iframe')
        videoIframe.className = 'video'
        videoWrapper.appendChild(videoIframe)
        let videoId = arr.map(item => item.data)[i]
        videoIframe.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`
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
        results.items.map(item => {
            list.append(item.id.videoId)
        })
        let listOfVideos = list.toArray()
        btn.classList.add('visible')
        btn.addEventListener('click', function () {
            setTimeout(makeVideoCards(mergeSort(listOfVideos)), 1000)
        })
        makeVideoCards(listOfVideos)

    } catch (error) {
        console.log(error)
    }
}




