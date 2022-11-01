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
const zigzagLevelOrder = (root) => {
    const result = []; // output array
    if (!root) return result;
    
    const queue = [];
    queue.push(root);
    let leftToRight = true; // determines whether we push or unshift to the currentLevel array
    while(queue.length > 0){
        const levelSize = queue.length;
        const currentLevel = [];
        for (let i = 0; i < levelSize; i++){
            const currentNode = queue.shift();
            
            // add node to currentLevel based on traverse direction
            if(leftToRight){
                currentLevel.push(currentNode.val);
            } else{
                currentLevel.unshift(currentNode.val);
            }
            
            // add children of current node to queue
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel)
        leftToRight = !leftToRight; // reverse the traversal direction
    }
    
    return result;
};