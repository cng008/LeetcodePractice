/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time: O(n)
 * Space: O(1)
 */
const detectCycle = (head) => {
    let slow = head,
        fast = head
    
    // find if cycle exists
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){ // cycle found
            slow = head
            while(slow !== fast){
                // increment both pointers until they meet at the start of the cycle
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
}