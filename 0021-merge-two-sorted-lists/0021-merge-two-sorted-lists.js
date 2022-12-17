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
const mergeTwoLists = (list1, list2) => {
    const mergedList = new ListNode(); // create new list to store merged result
    let curr = mergedList;
    
    while (list1 && list2) { // while not null
        const isL2Greater = list1.val < list2.val;
        if (isL2Greater) {
        // add smaller value to the mergedList
            curr.next = list1; // add node to mergedList
            list1 = list1.next; // advance list1 pointer
        } else {
            curr.next = list2;
            list2 = list2.next; // advance list2 pointer
        }
        curr = curr.next;
    }
    
    // if one of the pointers is not null
    curr.next = list1 || list2; // append remaining nodes of the non-empty LL to mergedList

    return mergedList.next // return the merged linked list
};