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
 input: head of LL
 outpu: bool, t if cycle exists
 Time: O(n) -> traverse entire LL if no cycle
 Space: O(1) -> no mem
 */
// FAST SLOW POINTERS
const hasCycle = (head) => {
    // start at the head for both pointers
    let slow = head,
        fast = head;
    
    // only need to check fast pointer bc it will be the one to reach first
    while (fast && fast.next) {
        slow = slow.next; // moves 1
        fast = fast.next.next; // moves 2
        
        // finding a cycle. fast eventually catches up to slow
        if (fast === slow) return true; // cycle found
    }
    return false; // did not encounter a cycle
};