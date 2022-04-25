import LinkedList from "../linkedList"

export const favoriteList = new LinkedList()

export function makeFavoriteList() {
   JSON.parse(localStorage.getItem('myFavoriteList')).map(item => 
    favoriteList.add(item)
    )
    console.log(favoriteList)
}





   
