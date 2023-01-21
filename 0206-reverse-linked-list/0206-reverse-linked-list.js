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
 Time: O(n) -> traverse entire list
 Space: O(1) -> in place
 input: head of LL (negative ints possible)
 output: head of LL (reversed)
 edge cases: empty input
 */

// BRUTE FORCE
const reverseList = (head) => {
    if (!head) return head;
    let current = head,
        prev = null
    
    while (current) { // node is not null
        const next = current.next // temp
        current.next = prev // change pointer to point to previous node
        
        // move on to next node
        prev = current
        current = next    
    }
    return prev // will end up pointing to the new head node
};

// RECURSIVE O(n) -> traverse over every node
// const reverseList = (head, prev = null) => {
//     if (!head) return prev;
//     const next = head.next;
//     head.next = prev;
//     return reverseList(next, head);
// };