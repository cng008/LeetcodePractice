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
 * Time: O(n) -> iterate entire tree
 * Space: O(n) -> call stack (unbalanced worst case)
 */
// DFS
const isBalanced = (root) => {
    if (!root) return true; // base case    
     // if the height of the tree is not -1, the tree is balanced
    return getHeight(root) !== -1;
};

// helper function to get the height of a tree
const getHeight = (node) => {
    if (!node) return 0;  // base case

    // calculate the height of the left and right subtrees
    let left = getHeight(node.left);
    let right = getHeight(node.right);

    // left or right subtree is not balanced, or the difference in height bt the left and right subtrees > 1, return -1
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    // return the height of the current node by adding 1 to the max of the left or right subtree
    return 1 + Math.max(left, right);
}


// ALTERNATE DFS - Time: O(n) | Space: O(n)
// const isBalanced = (root) => {
//     if (!root) return true;
//     return (Math.abs(height(root.left) - height(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right);
// };

// const height = (root) => {
//     if (!root) return 0;
//     return 1 + Math.max(height(root.left), height(root.right));
// }
