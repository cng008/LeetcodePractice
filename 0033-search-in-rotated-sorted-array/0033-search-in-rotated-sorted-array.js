/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time:  O(log n) -> binary search
 * Space: O(1)
 */
const search = (nums, target) => {
    let l = 0,
        r = nums.length - 1;
    
    // Return -1 if the array is empty
    if (nums.length === 0) return -1;
    
    // BINARY SEARCH
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid; // base case
        
        // checks if left half of array is sorted
        if (nums[l] <= nums[mid]) {
            // target is in left sorted portion
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1; // search left half
            } else {
                l = mid + 1; // search right half
            }
        } else {
        // if the left half is not sorted, the right half must be sorted
            // target is in right sorted portion
           if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1; // search right half
            } else {
                r = mid - 1; // search left half
            }
        }
    }
    
    return -1; // target not found
};