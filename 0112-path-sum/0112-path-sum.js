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
input: root of tree (pos/neg, binary, can be empty), target (int)
output: bool, t if target sum found
Time: O(n) -> traverse each node
Space: O(n) -> recursive call stack
 */
// DFS to recursively traverse down each path
// once we hit leaf node, backtrack and add up sum
const hasPathSum = function(root, targetSum) {
    if (!root) return false; // edge case

    // current node is a leaf node AND its value is equal to the sum
    if (root.val === targetSum && !root.left && !root.right) return true;
    
    // recursively call to traverse the left and right sub-tree, subtracting from targetSum at each iteration
    // stops if any of the calls return true
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};