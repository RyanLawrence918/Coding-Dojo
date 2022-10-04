  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
   compareQueues(q2) {
    if(!this.head) {
        return false;
    }
    var runner = this.head;
    while(runner) {

    }
}

contains(value) {
    if(!this.head) {
        return false;
    }
    var runner = this.head;
    while(runner) {
        if(runner.value === value) {
            return true;
        }
        runner = runner.next;
    }
    return false;
}


   /**
    * Determines if the queue is a palindrome (same items forward and backwards).
    * Avoid indexing queue items directly via bracket notation, instead use the
    * queue methods for practice.
    * Use only 1 stack as additional storage, no other arrays or objects.
    * The queue should be returned to its original order when done.
    * - Time: O(?).
    * - Space: O(?).
    * @returns {boolean}
    */
   isPalindrome() {
    let runner = this.head;
    let 

}
 
   /**
    * Find the intersection in between 2 queues
    * If there is no intersection return a null value
    * If the is an intersection return the node where the queues intersect
    * - Time: O(?).
    * - Space: O(?).
    * @param {Queue} q2 The queue to be compared against this queue to find intersection.
    * @returns {QueueNode} Null in case of no intersection
    */
   findIntersection(q2) {}