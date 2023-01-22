/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
input: root of tree
output: bool, t if same
Time: O(n) -> n is the total number of nodes in both trees
Space: O(n) -> no mem
edge case: both null
 */
// RECURSION
const isSameTree = (p, q) => {
   if (!p && !q) return true; // edge case: trees are the same when both null
   if (!p || !q || p.val !== q.val) return false; // edge case: one tree is null and the other is not or values at nodes !==

    // recursively check if the left and right subtrees are the same
   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};