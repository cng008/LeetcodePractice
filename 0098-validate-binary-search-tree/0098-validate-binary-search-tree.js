/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
input: root of tree (ints, neg/pos)
output: bool, t if valid
Time: O(n) -> traverse entire tree
Space: O(n) -> recursive stack
 */
const isValidBST = (root) => {
    // call helper function with initial bounds
    return traverse(root, -Infinity, Infinity);
};

// helper function to traverse the binary tree
const traverse = (node, lower, upper) => {
    if (!node) return true; // valid
    if (node.val <= lower || node.val >= upper) return false;  // node.val is out of bounds
    // recursively check the validity of the left and right subtrees
    return traverse(node.left, lower, node.val) && traverse(node.right, node.val, upper);
};