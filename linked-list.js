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

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
