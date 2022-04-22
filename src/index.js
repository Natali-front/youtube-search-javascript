import {searchYoutube} from './youtube-list/youtube'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


export const wrapper = document.querySelector('.wrapper')
document.getElementById('request').addEventListener('change', searchYoutube)




