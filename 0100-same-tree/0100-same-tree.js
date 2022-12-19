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
 * Time: O(p + q) -> iterate both trees -> O(n)
 * Space: O(n) -> call stack for recursion
 */
const isSameTree = (p, q) => {
    if (!p && !q) return true; // null edge case
    if (!p || !q || p.val !== q.val) return false; // one tree is null and the other is not or values are different
    
    // RECURSION
    // check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
