/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time: O(n) -> depends on length of LL
 * Space: O(n) -> create a new LL to store result
 */
const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let previousNode = new ListNode(); // keep track of prev node
    const headNode = previousNode;
    
    while (l1 || l2 || carry) { // not null & edge case: for result longer than max length of l1 or l2
        let val1 = 0,
            val2 = 0;
        if (l1) {
            val1 = l1.val;
            l1 = l1.next; // update to next node
        }
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        }
        // edge case: sum is double digits
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // sum > 9 ? 1 : 0
        const digit = sum % 10;
        
        const currentNode = new ListNode(digit)
        previousNode.next = currentNode; // chain nodes together
        previousNode = currentNode; // prep for next iteration
    }
    return headNode.next; // will be beginning of linked list
};