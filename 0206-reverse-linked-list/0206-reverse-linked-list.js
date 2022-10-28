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
 * Time: O(n) -> traverse over every node
 * Space: O(1) -> reversing in-place, no extra memory
 */
const reverseList = (head) => {
    let current = head,
        previous = null
    
    while(current !== null){
        let next = current.next // temp
        current.next = previous // change pointer to point to previous node
        
        // move on to next node
        previous = current
        current = next    
    }
    return previous // will end up pointing to the new head node
};