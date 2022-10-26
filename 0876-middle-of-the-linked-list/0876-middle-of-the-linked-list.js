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
 * Time: O(n) -> traverse through list
 * Space: O(1) -> just traversing, no extra memory
 */
const middleNode = (head) => {
    let slow = head,
        fast = head
    
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    return slow
};