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
    if (!s) return false; // if the current node is null, t cannot be a subtree of s
    if (isSameTree(s, t)) return true; // check if current subtree is the same as t
    // recursively check if t is a subtree of s's left or right children
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isSameTree = (p, q) => {    
    if (!p && ! q) return true; // edge case: trees are the same when both null
    
    // either s and t is null or values at the current node are different
    if (!p || !q || p.val !== q.val) return false;
    // nodes exist and values at the current node are same
    // recursively check if the left and right subtrees are the same
   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};