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
 * @param {number} targetSum
 * @return {number[][]}
 * Time: O(n^2) -> traverse over every node once + might have to store its path (by making a copy of the current path)
 * Space: O(n*logn) -> have to copy logN nodes to store its path
 */
const pathSum = (root, targetSum) => {
    const result = [];
    findPaths(root, targetSum, [], result);
    return result;
};

const findPaths = (currentNode, targetSum, currentPath, result) => {
    if (!currentNode) return; // have reached a leaf node
    currentPath.push(currentNode.val); // add current node to path
    
    // current node is a leaf node AND its value is equal to the sum
    if (currentNode.val === targetSum && !currentNode.left && !currentNode.right){
        result.push([...currentPath]);
    } else {
        // traverse left sub-tree
        findPaths(currentNode.left, targetSum - currentNode.val, currentPath, result);
        // traverse right sub-tree
        findPaths(currentNode.right, targetSum - currentNode.val, currentPath, result);
    }
    
    // backtrack last inserted node
    currentPath.pop();
}