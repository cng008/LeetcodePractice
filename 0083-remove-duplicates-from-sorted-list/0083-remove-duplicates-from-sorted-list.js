/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
input: head of LL
output: head of unique LL
Time: O(n) worst case no dupes 
Space: 
 */
const deleteDuplicates = (head) => {
    let curr = head;
    
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            // removes the next node by updating the next pointer of the current node
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
};