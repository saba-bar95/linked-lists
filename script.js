class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    this.size++;
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  tail() {
    if (!this.head) return;
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    if (!this.head) return;
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (!this.head) return;
    let currentNode = this.head;
    let previousNode;
    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    this.size--;
    if (!previousNode) {
      this.head = null;
      return;
    }
    if (previousNode) return (previousNode.nextNode = null);
  }

  contains(val) {
    if (!this.head) return;
    let currentNode = this.head;
    if (currentNode.value === val) return true;
    while (currentNode.value !== val) {
      currentNode = currentNode.nextNode;
      if (!currentNode) return false;
      if (currentNode.value === val) return true;
    }
  }

  find(val) {
    if (!this.head) return;
    let currentNode = this.head;
    let counter = 1;
    if (currentNode.value === val) return counter;
    while (currentNode.value !== val) {
      currentNode = currentNode.nextNode;
      counter++;
      if (!currentNode) return null;
    }
    return counter;
  }

  insertAt(val, index) {
    if (this.size + 1 < index) return;
    if ((!this.head && index > 1) || val < 1) return;
    if (index === 1) {
      this.head = new Node(val, this.head);
      this.size++;
      return;
    }
    let currentNode = this.head;
    let previousNode;
    for (let i = 1; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    this.size++;
    previousNode.nextNode = new Node(val, currentNode);
  }

  removeAt(index) {
    if (this.size < index) return;
    if (index === 1) {
      this.head = this.head.nextNode;
      this.size--;
      return;
    }

    let currentNode = this.head;
    let previousNode;
    for (let i = 1; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = currentNode.nextNode;
    this.size--;
  }
}

const list = new Linkedlist();
