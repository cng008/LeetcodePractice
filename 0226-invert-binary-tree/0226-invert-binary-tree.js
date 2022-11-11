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
const invertTree = (root) => {
    if (!root) return root;
    
    const temp = root.left
    root.left = root.right
    root.right = temp
    
    invertTree(root.left)
    invertTree(root.right)
    
    return root
};