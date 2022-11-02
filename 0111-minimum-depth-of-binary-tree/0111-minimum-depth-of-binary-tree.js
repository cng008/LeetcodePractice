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
 * @return {number}
 * Time: O(n) -> traverse over every node
 * Space: O(n) -> for queue
 */
const minDepth = (root) => {
    if (!root) return 0; // edge case
    
    const queue = [];
    queue.push(root);
    let minDepth = 0; // keep track of iterations
    while (queue.length > 0){
        minDepth++;
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++){
            let currentNode = queue.shift();

            // checks if is a leaf node (no children)
            if (!currentNode.left && !currentNode.right){
                return minDepth;
            }

            // add child nodes to queue
            if (currentNode.left){
                queue.push(currentNode.left);
            }
            if (currentNode.right){
                queue.push(currentNode.right);
            }
        }
    }
};