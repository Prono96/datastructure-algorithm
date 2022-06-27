// Creating a node class 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Creating a linkedlist class 
class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  // Append linked list 
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Prepend the linkedList 
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
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
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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
  
}

const myLinkedList = new linkedList(10);

console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 45));
console.log(myLinkedList.remove(2));

// console.log(myLinkedList.printList());