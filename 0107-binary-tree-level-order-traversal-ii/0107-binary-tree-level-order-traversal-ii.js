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
 * @return {number[][]}
 * Time: O(n) -> iterate through entire tree
 * Space: O(n) -> res, queue depends on input
 */
// input: tree => arr of ints
// output: tree => arr of arr of intes
// edge case: null input
// in order traversal -> BFS -> queue
const levelOrderBottom = (root) => {
    const res = [],
         q = [root];
    if (!root) return res;

    while (q.length > 0) {
        const levelSize = q.length,
              currLevel = [];
        for (let i = 0; i < levelSize; i++) {
            const curr = q.shift();
            currLevel.push(curr.val);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        res.unshift(currLevel);
    }
    return res;
};