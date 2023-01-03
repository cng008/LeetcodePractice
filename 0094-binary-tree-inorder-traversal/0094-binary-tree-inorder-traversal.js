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
 * @return {number[]}
 * Time: O(n) -> traverse over every node once
 * Space: O(n) -> recursive call stack
 */

// RECURSIVE
const inorderTraversal = (root) => {    
    const res = [];

     // define a helper function to traverse the tree in-order
    const inOrder = (node) => {
        if (!node) return;
        inOrder(node.left); // recursively traverse left subtree
        res.push(node.val); // add the node's value to the results array
        inOrder(node.right); // recursively traverse right subtree
    }
    
    // start the in-order traversal from the root node
    inOrder(root);
    
    return res;
};


// ITERATIVE
// const inorderTraversal = (root) => {    
//     const res = [], // output array
//           stack = []; // create a stack to store nodes to be visited
//     let curr = root; // initialize the current node to the root

//     // continue as long as the stack is not empty or the current node is not null
//     while (curr || stack.length > 0) {
//         while (curr) { // current node is not null
//            stack.push(curr); // add it to the stack
//             curr = curr.left; // move to the left child
//         } // current node is null
//         curr = stack.pop(); // pop the top element from the stack
//         res.push(curr.val); // add its value to the results array
//         curr = curr.right; // move to the right child
//     }
    
//     return res;
// };
