class ListNode {
    constructor( data ) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

isEmpty() {
        if ( this.head ) {
            return false;
        }
        return true;
    }
    
insertAtFront( data ) {
        let newNode = new ListNode( data );
        newNode.next = this.head;
        this.head = newNode;
        return;
    }


removeFromFront() {
        if( !this.isEmpty){
            this.head = this.head.next;
        }
        return;
    }

    insertAtBack( data ) {
        let newNode = new ListNode( data );
        if ( this.isEmpty() ){
            this.head = newNode;
        } else {
            let runner = this.head;
            while( runner.next ){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return;
    }

    
    removeBack(data) {
    let runner = this.head;
        while (runner.next){

        }
    }

    display(){
        if( this.isEmpty() ){
            console.log("This list is empty!")
        } else {
            let n = 0;
            let runner = this.head;
            console.log('node ' + n + ': '+runner.data);
            while( runner.next ){
                runner = runner.next;
                n++;
                console.log('node ' + n + ': '+runner.data);
            }
        }
        return;
    }
}




let list1 = new SinglyLinkedList();
list1.removeFromFront();
console.log(list1.isEmpty());
list1.insertAtBack("all");
list1.insertAtBack("my");
list1.insertAtBack("life");
list1.insertAtBack("I");
list1.insertAtBack("was");
list1.insertAtBack("waiting");
console.log(list1.isEmpty());

list1.removeFromFront();
list1.removeFromFront();
list1.removeFromFront();
list1.insertAtFront("grumpy")
list1.insertAtFront("bumpy")
list1.insertAtFront("mklumpy")
list1.insertAtFront("dumpy")

list1.display();


/**
 * Removes the last node of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data from the node that was removed.
 */
removeBack() {
    if(this.head.next){
        return this.head
    }
    let runner = this.head;
        while (runner.next.next){
            secondLast = runner.next;
                runner = runner.next;
        }
}


/**
  * Determines whether or not the given search value exists in this list.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The data to search for in the nodes of this list.
  * @returns {boolean}
  */
contains(val) {}

/**
  * Determines whether or not the given search value exists in this list.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The data to search for in the nodes of this list.
  * @param {?ListNode} current The current node during the traversal of this list
  *    or null when the end of the list has been reached.
  * @returns {boolean}
  */
containsRecursive(val, current = this.head) {}