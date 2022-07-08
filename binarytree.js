class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right =null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      // return this;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
            // left
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
     } else {
          // right 
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if(!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(7));
console.log(tree.insert(8));
console.log(tree.lookup(4));