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
 * Time: O(n) -> traverse each node once
 * Space: O(n) -> queue, needed for output array
 */
const levelOrder = (root) => {
    let result = []; // output array
    if (!root) return result; // edge case
    
    const queue = [];
    queue.push(root); // start queue with root node
    while(queue.length > 0){
        // current level size is the length of the queue
        const levelSize = queue.length;
        let currentLevel = [];
        for (i = 0; i < levelSize; i++){
            // loop for current length of the queue
            let currentNode = queue.shift(); // pop from left
            
            // add node to the current level
            currentLevel.push(currentNode.val);
            
            // add children of current node to the queue
            if (currentNode.left){
                queue.push(currentNode.left);
            }
            if (currentNode.right){
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
};