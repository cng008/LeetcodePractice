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
 * Time: O(n) -> traverse over every node
 * Space: O(n) -> depends on input
 */
// level order traversal -> BFS
const zigzagLevelOrder = (root) => {
    const result = []; // output array
    if (!root) return result;
    const queue = [root]
    let leftToRight = true; // determines whether we push or unshift to the currentLevel array

    while (queue.length > 0) {
        const currentLevel = [],
              levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift(); // fifo
            
            // add node to currentLevel based on traverse direction
            if (leftToRight) {
                currentLevel.push(current.val) // left to right
            } else {
                currentLevel.unshift(current.val) // right to left
            }
            
            // check for children and add to queue if applicable
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        result.push(currentLevel);
        leftToRight = !leftToRight; // reverse the traversal direction
    }
    return result
};