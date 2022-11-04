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
 * @param {number} targetSum
 * @return {boolean}
 * Time: O(n) -> traverse over every node once
 * Space: O(n) -> for recursion stack
 */
const hasPathSum = (root, targetSum) => {
    if (!root) return false; // edge case
    
    // current node is a leaf node AND its value is equal to the sum
    if (root.val === targetSum && !root.left && !root.right){
        return true;
    }
    
    // recursively call to traverse the left and right sub-tree 
    // stops if any of the calls return true
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};