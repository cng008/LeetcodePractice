/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * Time O(N + M) -> based on size of list1 & list2
 * Space O(N + M) -> based on size of list1 & list2
 */
// working w linked lists (sorted)
// combine into 1 merged list
// return ? if 0 nodes

// TWO POINTER
const mergeTwoLists = (list1, list2) => {
    const mergedList = new ListNode(); // dummy node; need to return head at the end
    let tail = mergedList;
 
    while (list1 && list2) {
        const l2IsGreater = list1.val < list2.val

        if (l2IsGreater) {
             // add smaller value to the mergedList
            tail.next = list1 // add node to mergedList
            list1 = list1.next // advance list1 pointer
        } else {
            tail.next = list2
            list2 = list2.next // advance list2 pointer
        }
        tail = tail.next // updates regardless of which node we inserted into list
    }
     // if one of the pointers is not null
    // if (list1) tail.next = list1
    // if (list2) tail.next = list2
    tail.next = list1 || list2; // append remaining nodes of the non-empty LL to mergedList

    return mergedList.next // return the merged linked list
};