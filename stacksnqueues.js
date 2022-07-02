class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null, 
    this.buttom = null,
    this.length = 0
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.buttom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++
    return this;
  }

  pop() {
    if(!this.top) {
      return null
    } 
    if(this.top === this.buttom) {
       this.buttom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--
    return this;
  }
}








const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push('man'));
console.log(myStack.push('woman'));
console.log(myStack.push('animal'));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
// console.log(insertInto('goat'));
// console.log(insertInto('cow'));
// console.log(insertInto('pig'));
// console.log(insertInto('pig'));
// console.log(insert('code'));
// console.log(insert('code'));
