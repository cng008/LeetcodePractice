### BFS
Uses a queue data structure to store and visit nodes in a tree. It starts at the root node and adds it to the queue. Then, it enters a loop that continues as long as there are nodes in the queue.
​
For each iteration of the loop, the method counts the number of nodes in the queue (the size of the current level). It does this by storing the value of queue.length in a variable called levelSize.
​
Then, the method loops through each node in the current level using a for loop. For each node, it removes it from the queue and checks if it has any child nodes. If it does, it adds them to the queue.
​
When the for loop finishes, all nodes in the current level have been removed from the queue and added to the queue. The next iteration of the while loop begins, and the process repeats until the queue is empty. This means that all nodes in the tree have been visited and the maximum depth has been found.
​
### DFS
Calculates the maximum depth of the tree by comparing the maximum depth of the left and right subtrees at each node, and then adding 1 to account for the current root node.
​
If the tree is a complete binary tree, where all levels are fully filled except possibly the last level, and the last level is filled from left to right, then the maximum depth of the tree will correspond to the number of levels in the tree.