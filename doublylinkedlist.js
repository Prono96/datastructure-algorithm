// Creating a node class 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
// Creating a linkedlist class 
class doublylinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  // Append linked list 
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Prepend the linkedList 
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return  this.printList();
  }

  // Create A print List 
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // Insert into printlist
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1); 
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode; 
    this.length++;
    return this.printList();
  }  
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // Remove from the linkedlist
  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    // return this.length--;
    return this.printList();
  }

  // Reverse the linkedlist 
  reverse() {
    if(!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first;

    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
  
}

const myLinkedList = new doublylinkedList(10);

console.log(myLinkedList.append(7));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(6));
console.log(myLinkedList.insert(2, 45));
console.log(myLinkedList.reverse());
// console.log(myLinkedList.remove(2));


// console.log(myLinkedList.printList());