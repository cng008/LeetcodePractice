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
input: head of LL (arr)
output: bool (t if cycle exists)
Time: O(n) -> traverse entire LL
Space: O(1) -> no extra mem
edge cases: empty LL, no cycle -> return false
 */
// FAST SLOW POINTERS
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