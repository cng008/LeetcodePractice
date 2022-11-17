/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time: O(log n) -> reduces the search range by half at every step
 * Space: O(1) -> constant space
 */

// Modified Binary Search
const searchInsert = (nums, target) => {
    const n = nums.length
    if (target > nums[n - 1]){ // target is bigger than the biggest element
        return n; // insert at end of array
    }
    
    let l = 0,
        r = n - 1;
    
    while (l <= r){
        const mid = Math.floor(l + (r - l) / 2)
        if (target > nums[mid]){
            l = mid + 1;
        } else if (target < nums[mid]){
            r = mid - 1;
        } else {
            return mid; // found target
        }
    }
    // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1' we are not able to find the element in the given array, so the next big number will be arr[start]
    return l;
};