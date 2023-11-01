/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {

  constructor(vals = []) {

    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);

  }

  /** push(val): add new value to end of list. */

  push(val) {

    const newNode = new Node(val);

    if (!this.head) {

      this.head = newNode

    }

    if (this.tail) {

      this.tail.next = newNode

    }

    this.tail = newNode
    this.length ++

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    const newNode = new Node(val, this.head);

    if (!this.head) {

      this.tail = newNode

    }

    this.head = newNode
    this.length ++

  }

  /** pop(): return & remove last item. */

  pop() {

    let currentNode = this.head
    let previousNode = null

    while(currentNode.next){

      previousNode = currentNode
      currentNode = currentNode.next

    }

    if (previousNode) {

      previousNode.next = null

    }

    if (!previousNode) {

      this.head = null

    }

    this.tail = previousNode
    this.length --
    return currentNode.val

  }

  /** shift(): return & remove first item. */

  shift() {

    const removedHead = this.head

    if (!this.head.next) {

      this.head = null
      this.tail = null
      this.length --

      return removedHead.val

    }

    this.head = this.head.next
    this.length --

    return removedHead.val

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (!this.head){
      return null
    }

    let currentIdx = 0
    let currentNode = this.head

    while(idx != currentIdx) {

      if(!currentNode.next){
        break
      }

      currentNode = currentNode.next
      currentIdx ++

    }

    if (currentIdx != idx){
      return null
    }

    return currentNode.val

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (!this.head){
      return null
    }

    let currentIdx = 0
    let currentNode = this.head

    while(idx != currentIdx) {

      if(!currentNode.next){
        break
      }

      currentNode = currentNode.next
      currentIdx ++

    }

    if (currentIdx != idx){
      return null
    }

    currentNode.val = val

    return currentNode.val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    const newNode = new Node(val)

    if (!this.head){

      this.head = newNode
      this.tail = newNode

      this.length ++

      return undefined

    }

    let currentIdx = 0
    let currentNode = this.head
    let previousNode = null

    while(idx != currentIdx) {

      if(!currentNode.next){
        break
      }

      previousNode = currentNode
      currentNode = currentNode.next
      currentIdx ++

    }

    if (currentIdx != idx){

      if (currentNode == this.tail) {

        currentNode.next = newNode
        this.tail = newNode
  
      }

      return undefined
    }

    newNode.next = currentNode
    previousNode.next = newNode

    this.length ++

    return newNode.val

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (!this.head){
      return null
    }

    let currentIdx = 0
    let currentNode = this.head
    let previousNode = null

    while(idx != currentIdx) {

      if(!currentNode.next){
        break
      }

      previousNode = currentNode
      currentNode = currentNode.next
      currentIdx ++

    }

    if (currentIdx != idx){
      return null
    }

    if (!previousNode && !currentNode.next) {

      this.head = null
      this.tail = null
      this.length = 0

      return currentNode.val

    }

    if (currentNode === this.head) {

      this.head = currentNode.next
      this.length --

      return currentNode.val

    }

    if (currentNode === this.tail) {

      this.tail = previousNode
      this.length --

      return currentNode.val

    }

    previousNode.next = currentNode.next
    this.length --

    return currentNode.val

  }

  /** average(): return an average of all values in the list */

  average() {

    if (this.length === 0){
      return 0
    }

    let count = 0;
    let total = 0;
    let currentNode = this.head

    while(currentNode.next) {

      total = total + currentNode.val
      count ++

      currentNode = currentNode.next

    }

    total = total + this.tail.val

    count ++

    return (total / count)
    
  }
}

module.exports = LinkedList;
