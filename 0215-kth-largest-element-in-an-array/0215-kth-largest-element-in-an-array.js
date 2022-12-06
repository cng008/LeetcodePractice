/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // BRUTE FORCE O(n^2)
const findKthLargest = (nums, k) => {
    nums.sort((a, z)=> z - a) // sort descending
    return nums[k - 1]
};

/** MAX HEAP
 * Time: O(n log k) -> iterate every # in the input arr, extract the min
 * Space: O(k) -> need to store the top k numbers in a heap
*/
// const findKthLargest = (nums, k) => {
    // const maxHeap = new Heap();
    
    // // push first k numbers in the max heap
    // for (let i = 0; i < k; i++) {
    //     maxHeap.push(nums[i]);
    // }
    
    // for (let i = k; i < nums.length; i++) {
    //     if (nums[i] > maxHeap.peek()) {
    //         maxHeap.pop();
    //         maxHeap.push(nums[i]);
    //     }
    // }
    
    // // root of the heap has the Kth largest number
    // return maxHeap.peek();
// };
