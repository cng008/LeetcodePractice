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
 * @return {number[]}
input: root of tree (valid binary tree)
output: arr (vals pos/neg)
Time: O(n)
Space: O(n)
 */
const preorderTraversal = (root) => {
    const res = [];
    
    const traverse = (node) => {
        if (!node) return;
        res.push(node.val); // push val to res arr
        traverse(node.left); // left subtree
        traverse(node.right); // right subtree
    }
    traverse(root);
    return res;
};