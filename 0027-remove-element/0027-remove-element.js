/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Time: O(n) -> iterate through entire array once
 * Space: O(1) -> modify in-place, no extra memory
 */
const removeElement = (nums, val) => {
    if (nums.length === 0) return 0; // edge case
    
    let i = 0; // keep track of the current position in the array
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}