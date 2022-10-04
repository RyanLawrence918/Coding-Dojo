class Node {
    @param {number} data The integer to store in the node.
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

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
        return;
    }
    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);
  
    console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
  
    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
      if (this.root == null) {
        return true;
      }
      return false;
    }
  
    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
      if (this.isEmpty()) {
        return null;
      }
      while (current.left) {
        current = current.left;
      }
      return current.data;
    }
  
    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */ 
    minRecursive(current = this.root) {
      if (this.isEmpty()) {
        return null;1
      }
      if (current.left) {
        return this.minRecursive(current.left);
      }
      return current.data;
    }
  
    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
      if (this.isEmpty()) {
        return null;
      }
      while (current.right) {
        current = current.right;
      }
      return current.data;
    }
  
    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
      if (this.isEmpty()) {
        return null;
      }
      if (current.right) {
        return this.minRecursive(current.right);
      }
      return current.data;
    }
  }
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new Node(10);
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new Node(10);
  twoLevelTree.root.left = new Node(5);
  twoLevelTree.root.right = new Node(15);