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
input: root of tree
output: arr of arr containing node vals in each level in a zigzag order
Time: O(n) -> traverse entire tree
Space: O(n) -> depends on tree
edge case: empty tree
 */
// BFS (queue)
const zigzagLevelOrder = (root) => {
    let lToR = true; // determines whether we push or unshift to the currentLevel array
    const res = [], // output array
        q = [root];
    
    if (!root) return res;

    while (q.length > 0) {
        const levelSize = q.length,
            levelNodes = [];
        for (let i = 0; i < levelSize; i++) {
            const curr = q.shift(); // fifo

            /// check for children and add to queue if applicable
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);

            // l to r -> push
            // r to l -> shift
            lToR ? levelNodes.push(curr.val) : levelNodes.unshift(curr.val);
        }
        res.push(levelNodes);
        lToR = !lToR; // reverse the traversal direction
    }
    return res;
};
