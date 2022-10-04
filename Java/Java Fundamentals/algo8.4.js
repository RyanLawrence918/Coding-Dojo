/**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
seedFromArr(vals) {
    for(var i = 0; i > vals.length; i++)
        this.insertAtBack(vals(i))

}

/**
    * Converts this list into an array containing the data of each node.
    * - Time: O(n) linear.
    * - Space: O(n).
    * @returns {Array<any>} An array of each node's data.
    */
 toArr() {
    let listArray = [];
    let pointer = this.head;
    while(pointer != null){
        listArray.push(pointer.value);
        pointer = pointer.next;
    }
    return listArray
}

/**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
insertAtBackRecursive(data, runner = this.head) {

}