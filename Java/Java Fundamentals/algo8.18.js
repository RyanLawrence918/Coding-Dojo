class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // to the left should only be less than
        this.right = null; // to the right should only be greater than
    }

    add(value) {
        if(value < this.value) {
            if(this.left) {
                this.left.add(value);
            } else {
                this.left = new BSTNode(value);
            }
        }
    }

// /**
//    * Calculates the height of the tree which is based on how many nodes from
//    * top to bottom (whichever side is taller).
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {Node} node The current node during traversal of this tree.
//    * @returns {number} The height of the tree.
//    */

findLongestBranch() {
    if(!this.left && !this.right) {
        return 0;
    }

    let left = this.left ? this.left.findLongestBranch() + 1 : 0;
    let right = this.right ? this.right.findLongestBranch() + 1 : 0;

    return Math.max(left, right);
}


height(node = this.root){
    if(!this.left && !this.right) {
        return 0;
    }

    let left = this.left ? this.left.findLongestBranch() + 1 : 0;
    let right = this.right ? this.right.findLongestBranch() + 1 : 0;

    return Math.max(left, right);
    }
}

var bst = new BSTNode();
bst.add(10);
bst.add(15);
bst.add(5);
bst.add(20);
bst.add(25);
bst.add(8);
bst.add(3);
console.log("====================");
console.log(BSTNode.height());


// /**
//     * Determines if this tree is a full tree. A full tree is a tree where every
//     * node has both a left and a right except for the leaf nodes (last nodes)
//     * - Time: O(?).
//     * - Space: O(?).
//     * @param {Node} node The current node during traversal of this tree.
//     * @returns {boolean} Indicates if this tree is full.
//     */
// isFull(node = this.root) {
//     if(!node)
// }

// }