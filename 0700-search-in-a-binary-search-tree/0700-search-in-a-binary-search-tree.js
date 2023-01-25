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
 * @param {number} val
 * @return {TreeNode}
input: root of tree, target val (pos)
output: root of subtree, null if not found
Time: O(log n) -> binary search
Space: O(n) -> call stack, first node is target
 */
const searchBST = (root, val) => {
    if (!root) return null; // edge case: target not found
    if (root.val === val) {
        return root; // found target
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else { // root.val < target
        return searchBST(root.right, val);
    }
};