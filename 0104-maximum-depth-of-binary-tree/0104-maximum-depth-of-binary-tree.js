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

// BFS
const maxDepth = (root) => {
    if (!root) return 0; // edge case
    
    const queue = []; // create a queue to store nodes as we visit them
    queue.push(root); // add root node to queue
    let maxDepth = 0; // track number of iterations
    
    // continue looping as long as there are nodes in the queue
    while(queue.length > 0) {
        maxDepth++; // increment for each iteration   
        const levelSize = queue.length; // store the size of the current level
        // loop through all nodes in the current level (queue)
        for (let i = 0; i < levelSize; i++){
            // remove the first node from the queue and assign it to currentNode
            const currentNode = queue.shift();
            
            // add child nodes of currentNode to queue (if exists)
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }
    return maxDepth;
};


/** DFS 
 * Time: O(n) -> traverse over every node
 * Space: O(n) -> recursive call stack
 */
// const maxDepth = (root) => {
//     if (!root) return 0; // edge case

//     return recursiveDFS(root)
// };

// const recursiveDFS = (root) =>{
//     const left = maxDepth(root.left)
//     const right = maxDepth(root.right)
//     const height = Math.max(left, right)

//     return height + 1

// }