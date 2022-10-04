/**
 * BFS order: horizontal rows top-down left-to-right.
 * Converts this BST into an array following Breadth First Search order.
 * Example on the fullTree var:
 * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
 * @param {Node} current The current node during the traversal of this tree.
 * @returns {Array<number>} The data of all nodes in BFS order.
 */
toArrLevelOrder(currentNode = this.root, vals=[]){
    if(currentNode == null){
        return;
    }
    if(currentNode == this.root ){
        vals.push(currentNode.data)
    }
    if(currentNode.left != null){
        vals.push(currentNode.left.data);
    }
    if(currentNode.right != null){
        vals.push(currentNode.right.data);
    }
    this.toArrLevelOrder(currentNode.left, vals);
    this.toArrLevelOrder(currentNode.right, vals);
    return vals;
    
}

 /**
  * Recursively counts the total number of nodes in this tree.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Node} node The current node during the traversal of this tree.
  * @returns {number} The total number of nodes.
  */
 size(node = this.root) {}


//          50
//      25      75
//   10   40  60   90

// [50, 25, 75, 10, 40, 60, 90]