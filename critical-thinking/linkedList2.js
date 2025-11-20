class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }
   
    append(value) {
        const newNode = new Node(value);

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }





insert(index, value){
    if(index < 0 || index > this.length) {
        console.error("index out of bound");
        return undefined;
    }
//if the insert is in the start of the link list
    if (index == 0){
        return this.prepend(value);
    }
// if the insert is the end of the list
    if(index == this.length) {
        return this.append(value);
    }
//if the insert in the midle

    const leadingNode = this._traverseToIndex(index -1);
    const holdingNode = leadingNode.next;

    const newNode = new Node (value);

    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
}

_traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count != index) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
}




print() {
    const arr = [];
let currentNode = this.head;
while(currentNode != null) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(arr.join(">"), "> null");
}
}


const linkedList = new LinkedList();

linkedList.append(4);
linkedList.append(3);
linkedList.append(5);

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);

linkedList.insert(2 , 100);

linkedList.print();
