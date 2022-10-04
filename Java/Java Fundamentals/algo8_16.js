/**
 * DFS Inorder: (Left, CurrNode, Right)
 * Converts this BST into an array following Depth First Search inorder.
 * See debugger call stack to help understand the recursion.
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrInorder(node = this.root, vals = []) {
    if(!node){
        return vals;
    }
    if (node) {
        vals.push(node.data);
        this.toArrInOrder(node.left, vals);
        this.toArrInOrder(node.right, vals);
    }
    return vals;
}

/**
 * DFS Preorder: (CurrNode, Left, Right)
 * Converts this BST into an array following Depth First Search preorder.
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrPreorder(node = this.root, vals = []) {
    
}

/**
 * DFS Postorder (Left, Right, CurrNode)
 * Converts this BST into an array following Depth First Search postorder.
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrPostorder(node = this.root, vals = []) {}