/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
INPUT -> head of linked list, k
OUTPUT -> head of linked list
Time Complexity: O(n) -> traverse each node of linked list
Space Complexity: O(1) -> rotating in place
- empty linked list
- k is larger than length of list
- need to find tail
- need to find length of linked list

 */
const rotateRight = (head, k) => {
    // check if the list is empty or only has one node
    if (!head || !head.next) return head;
    // get the length of the list
    let length = 1;
    let curr = head;
    while (curr.next) {
        curr = curr.next;
        length++;
    }
    // make the list circular
    curr.next = head;
    // get the actual number of rotations needed
    k = k % length;
    // find the new tail node
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    // set the new head and new tail
    let newHead = newTail.next;
    newTail.next = null;
    // return the modified list
    return newHead;
};