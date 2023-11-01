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
    // console.log(newNode)

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

      // console.log(currentNode)
      // console.log(currentIdx)

      if(!currentNode.next){
        // console.log("FIRST RETURN")
        break
      }

      currentNode = currentNode.next
      currentIdx ++

    }

    // console.log("OUT OF LOOP")

    // console.log(`${currentIdx} - ${idx}`)

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

      // console.log(currentNode)
      // console.log(currentIdx)

      if(!currentNode.next){
        // console.log("FIRST RETURN")
        break
      }

      currentNode = currentNode.next
      currentIdx ++

    }

    // console.log("OUT OF LOOP")

    // console.log(`${currentIdx} - ${idx}`)

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

      console.log(currentNode)
      console.log(currentIdx)

      if(!currentNode.next){
        console.log("FIRST RETURN")
        break
      }

      previousNode = currentNode
      currentNode = currentNode.next
      currentIdx ++

    }

    console.log("OUT OF LOOP")

    console.log(`${currentIdx} - ${idx}`)

    if (currentIdx != idx){

      if (currentNode == this.tail) {

        console.log("TAIL INSERT")
        console.log(currentNode)
        currentNode.next = newNode
        this.tail = newNode
  
      }

      return undefined
    }

    console.log(currentNode)
    console.log(this.tail)

    console.log(this)

    newNode.next = currentNode
    previousNode.next = newNode

    this.length ++

    console.log(this)

    return newNode.val

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
