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
 * @param {TreeNode} subRoot
 * @return {boolean}
input: roots of 2 trees (non-empty, pos/neg, )
output: bool, t if subRoot in root
Time: O(m + n)
Space: O(m + n)
 */
const isSubtree = (root, subRoot) => {
    if (!root) return false; // if the current node is null, t cannot be a subtree of s
    if (!subRoot) return true;
    if (isSameTree(root, subRoot)) return true; // check if current subtree is the same as t
     // recursively check if t is a subtree of s's left or right children
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = (p, q) => {
    if (!p && !q) return true; // edge case: trees are the same when both null
    if (!p || !q || p.val !== q.val) return false; // either s and t is null or values at the current node are different

    // recursively check if the left and right subtrees are the same
    // nodes exist and values at the current node are same
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // returns bool
}