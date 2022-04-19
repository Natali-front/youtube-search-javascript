import {searchYoutube, makeVideoCards,list} from './youtube-list/youtube'
import { bubbleSort } from './linkedList'

export const wrapper = document.querySelector('.wrapper')
document.getElementById('request').addEventListener('change', searchYoutube)
export const btn = document.querySelector('.sort')
btn.addEventListener('click', function () {
    setTimeout(makeVideoCards(bubbleSort(list)), 1000)
})


