This solution uses a recursive approach to traverse the binary tree in-order. The in-order traversal algorithm visits the left subtree, the root node, and then the right subtree in that order.
​
The solution defines a helper function inOrder that takes a single node as an argument. The function first checks if the node is null, in which case it returns. If the node is not null, the function first recursively traverses the left subtree, then adds the node's value to the results array, and finally recursively traverses the right subtree.
​
The inorderTraversal function initializes an empty array to store the results and then calls the inOrder function on the root node to start the in-order traversal. After the traversal is complete, the function returns the results array.