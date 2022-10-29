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
 * Time: O(n + k) -> get length of LL + traverse and reverse 'k' nodes
 * Space: O(1) -> reversing in-place, no extra memory
 */
const reverseKGroup = (head, k) => {
    
    // edge cases
    if (k <= 1 || head === null) return head;
    
    let current = head,
        previous = null,
        len = getLength(head);
    
    while (current){
        const lastNodeOfPreviousSubList = previous;
        // after reversing the sub-list, 'current' will become the last node of the sub-list
        const lastNodeOfSubList = current;
        let next = null; // temp for next node
        let i = 0;

        // don't change sub-list if remaining nodes is not a multiple of 'k'
        if (len < k) break;
        
        while (current !== null && i < k){ // reverse 'k nodes' -> O(k) only runs for length of 'k'
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
            i++;
        }
        
        // connect with previous sub-list
        if (lastNodeOfPreviousSubList !== null){
            lastNodeOfPreviousSubList.next = previous;
        } else {
            head = previous;
        }
        
        // connect with next sub-list
        lastNodeOfSubList.next = current;
                
        // set variables for next loop of sublist reversals
        len = len - k;
        previous = lastNodeOfSubList;
    }
    
    return head;
};

// get length of linked list -> O(n)
const getLength = (head) => {
    let len = 0,
        temp = head;
    while (temp !== null){
        temp = temp.next;
        len++;
    }
    return len;
}