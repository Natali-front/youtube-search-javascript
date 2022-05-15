function Node(element){
    this.element = element
    this.next = null
}
export default class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    size() {
        return this.length
    }

    add(element) {
        let node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.length++
    }
    addAt(index, element){
        let node = new Node(element)
        let currentNode = this.head
        let previousNode
        let currentIndex = 0
        if(index > length) return false
        if(index===0){
            node.next = currentNode
            this.head = node
        }else {
            while(currentIndex < index){
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            node.next = currentNode
            previousNode.next = node
        }
        this.length++
    }
    indexOf(element) {
        let currentNode = this.head
        let index = -1 
        while(currentNode) {
            index++
            if(currentNode.element===element) {
                return index
            }
            currentNode = currentNode.next
        }
        return -1
    }
    elementAt(index) {
        let currentNode = this.head
        let count = 0
        while (count < index) {
            count++
            currentNode = currentNode.next
        }
        return currentNode.element
    }
    remove(element) {
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
        this.length--
    }
    isEmpty() {
        return length === 0
    }

    removeAt(index) {
        let currentNode = this.head 
        let previousNode
        let currentIndex = 0
        if (index < 0 || index >= length)
        if(index===0) {
            this.head = currentIndex.next
        }else {
            while (currentIndex < index) {
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        this.length--
        return currentNode.element
    }
    
}
export function swap(list, a, b) {
    let temp = list.elementAt(a).element;
    list.elementAt(a).element = list.elementAt(b).element;
    list.elementAt(b).element = temp
}

export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

export function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function bubbleSort(list, compare = defaultCompare) {
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







