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
 * @return {TreeNode}
 * Time: O(n) -> traverse through each node
 * Space: O(n) -> depends on input
 */
// RECURSION
const invertTree = (root) => {
    if (!root) return root; // edge case
    
    // swap left / right
    const temp = root.left; // temp node
    root.left = root.right;
    root.right = temp;
    
    // recursively check children
    invertTree(root.left); // left subtree
    invertTree(root.right); // right subtree
    
    return root;
};