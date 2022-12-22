/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * Time: O(n) -> traverse entire linked list
 * Space: O(1) -> no extra memory
 */
const hasCycle = (head) => {
    // start at the head for both pointers
    let slow = head,
        fast = head;
    
    // only need to check fast pointer bc it will be the one to reach first
    while (fast && fast.next){ 
        slow = slow.next; // moves 1
        fast = fast.next.next; // moves 2
        
        if (fast === slow){
            return true; // cycle found
        }
    }
    
    return false;
};