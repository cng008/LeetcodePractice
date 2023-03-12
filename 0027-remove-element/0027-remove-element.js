/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
input: arr (int, +/-, dupes ok, unsorted)
output: int (+, length of arr w/o val, order doesn't matter)
Time: O(n) -> iterate through entire array once
Space: O(1) -> modify in-place, no extra memory
edge case: empty input -> return 0
 */
const removeElement = (nums, val) => {
    if (nums.length === 0) return 0; // edge case
    
    let i = 0; // keep track of the current position in the array
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]; // move !val to front of input
            i++;
        }
    }
    return i; // length of arr w/o element
}