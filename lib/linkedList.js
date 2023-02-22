const Node = require('./node');

/**
 * +----------------+
 * |   LinkedList   |
 * +----------------+
 * | head           |
 * | tail           |
 * | size           |
 * +----------------+
 * |                |
 * +----------------+
 */

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        /*if (!this.size){
            return true;
        } else{
            return false;
        }*/
        return !this.size ? true : false;
    }

    appendToStart(value){
        const newNode = new Node(value); // Create new node
        newNode.next = this.head; // New node points to head
        this.head = newNode; // Head = new node
        
        //if list is empty then, this tail points to new node
        if (this.isEmpty()){
            this.tail = newNode;
        }
        ++this.size;//size
    }

    appendToEnd (value) {
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = NewNode;
            this.tail
        }else{
            this.tail.next = newNode;
            this.tail=newNode;
        }

        
        ++this.size
    }

    exists (value) {
        if (this.isEmpty()) {
            return false;            
        }
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value === value){
                return true;
                
            }
            currentNode = currentNode.next
        }
        return false;
    }

    //TODO. update this method
    toString(){
        if (this.isEmpty()) {
            return "is empty";            
        }
        let string="";
        let currentNode = this.head;

        while(currentNode != null){
            string += currentNode.value + "->";    
            currentNode = currentNode.next
        }
        return false;
    }
}

const myLinkedList = new LinkedList();
const linkedString = myLinkedList.toString();


console.log(linkedString)
//console.log(myLinkedList.isEmpty()) // true

myLinkedList.appendToStart(3);
myLinkedList.appendToEnd(5);
console.log(linkedString)
//console.log(linkedString);
/* myLinkedList.appendToEnd(5);
console.log(myLinkedList.isEmpty()) // false
console.log(linkedString)
myLinkedList.appendToEnd(5);
myLinkedList.appendToEnd(1);
myLinkedList.appendToEnd(23);
myLinkedList.appendToEnd(12); */

/* console.log(myLinkedList.exists(5)); // false
console.log(myLinkedList.exists(13)); // true
console.log(myLinkedList.exists(23)); // true
console.log(myLinkedList.exists(2)); // false
console.log(myLinkedList.exists(12)); // true */

