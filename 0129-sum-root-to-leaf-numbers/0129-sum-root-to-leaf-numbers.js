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
 * @return {number}
 * Time: O(n) -> traverse over every node once
 * Space: O(n) -> for recursion stack
 */
const sumNumbers = (root, sum = 0) => {
    if (!root) return 0;
    
    // calculate path number of the current node
    sum = 10 * sum + root.val;
        
    // return current path sum if node is a leaf
    if(!root.left && !root.right) return sum;
    
    // traverse left and right sub-tree
    // add path numbers together
    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum)
};