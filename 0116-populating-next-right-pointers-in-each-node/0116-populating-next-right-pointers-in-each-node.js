/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 * Time: O(n) -> traverse over every node
 * Space: O(n) -> depends on size of input
 */
const connect = (root) => {
    let queue = [root]; // output array
    if(!root) return null; //edge case
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            if (i !== levelSize - 1) { // is not the last node on the level
                currentNode.next = queue[0];
            }
            
            // insert children of currentNode to queue
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
    return root;
};