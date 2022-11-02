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
const maxDepth = (root) => {
    if (!root) return 0; // edge case
    
    const queue = [];
    queue.push(root);
    let maxDepth = 0; // track number of iterations
    
    while(queue.length > 0){
        maxDepth++;
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++){
            const currentNode = queue.shift();
            
            // add child nodes of currentNode to queue
            if (currentNode.left){
                queue.push(currentNode.left);
            }
            if (currentNode.right){
                queue.push(currentNode.right);
            }
        }
    }
    return maxDepth;
};