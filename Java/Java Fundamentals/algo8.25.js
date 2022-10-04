class SLNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(value){
        var newNode = new SLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(value) {
        var newNode = new SLNode(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }



/**
 * Reverses this list in-place without using any extra lists.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list.
 */
reverse() {
    if (!this.head == null)
        console.log("No list");
    }

    var currentNode = this.head;
    var nextNode = this.head.next;
    var prevNode = 

/**
  * Determines whether the list has a loop in it which would result in
  * infinitely traversing unless otherwise avoided. 
  * A loop is when a node's next points to a node that is behind it.
  * 
  * - Time: (?).
  * - Space: (?).
  * @returns {boolean} Whether the list has a loop or not.
  */
hasLoop() {
    if(this.head == null)
        return false;
    }
    let runner = this.head
    

    while(runner.next)
        runner = runner.next.next;

    
}