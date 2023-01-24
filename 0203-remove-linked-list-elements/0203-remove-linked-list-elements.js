/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
input: head of LL
output: head of LL
Time: O(n) -> traverse entire LL
Space: O(1) -> in place
    val not in list
    duplicate found, remove 1st we encounter or all
    singly LL
 */
const removeElements = (head, val) => {
    if (!head) return head; // edge case: no head
    
    // create a dummy node to serve as the new head of the list
    let dummy = new ListNode();
    dummy.next = head;
    
    // create a pointer to iterate through the list
    let curr = dummy;
    
    while (curr.next !== null) {
        // skip over the node if the value of the next node is equal to val
        if (curr.next.val === val) {
            // skip over the node by reassigning curr.next to curr.next.next
            curr.next = curr.next.next;
        } else {
            // move the pointer forward if the next node is not equal to val
            curr = curr.next;
        }
    }
    
    return dummy.next;
};