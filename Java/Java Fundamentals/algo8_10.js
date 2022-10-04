/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        if ( this.root !=null ) {
            return false;
        }
        return true;
    }

    insert(newVal) {
    let node = new BSTNode(newVal);
    if(this.root === null) {
        this.root = node;
    }
    else {
        let runner = this.root;
        while( runner != null ){
            if (runner.newVal > newVal){
                if(runner.left === null) {
                    runner.left = node;
                    return;
                }
                else if (runner.newVal < newVal) {
                    if 
                }
            }
        }
    }
}

 /**
 * Retrieves the smallest integer data from this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} current The node that is currently accessed from the tree as
 *    the tree is being traversed.
 * @returns {number} The smallest integer from this tree.
 */
min(current = this.root) {}
}

/**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
 minRecursive(current = this.root) {}

 /**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
contains(searchVal) {}

/**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
containsRecursive(searchVal, current = this.root) {}