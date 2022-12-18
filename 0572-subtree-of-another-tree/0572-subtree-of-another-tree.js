/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * Time: O(n + m) -> n is the number of nodes in the larger tree s
 and m is the number of nodes in the tree t	
 * Space: O(m) -> at most, the recursive stack will have m levels
 */
const isSubtree = (s, t) => {
    if (!s) return false; // no subtree
    if (isSameTree(s, t)) return true; // current node in s is a subtree
    // recursively check if t is a subtree of s's left or right children
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isSameTree = (s, t) => {
    if (!s && ! t) return true; // edge case: trees are the same when both null
    
    // nodes exist and values at the current node are same
    if (s && t && s.val === t.val) {
        // recursively check if the left and right subtrees are the same
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    }
    // if only one of s and t is null or if the values at the current node are different, the trees are not the same
    return false;
}