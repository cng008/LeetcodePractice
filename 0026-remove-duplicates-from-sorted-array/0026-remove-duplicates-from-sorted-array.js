/**
 * @param {number[]} nums
 * @return {number}
input: arr (ints, pos, neg, dupes)
output: int (length of unique part of the array)
Time: O(n) -> iterate through entire array once
Space: O(1) -> modify in-place, no extra memory
 */
const removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
     
    let i = 0; // keep track of the current position in the array
    
    for (let j = 1; j < nums.length; j++) {
        // checks if unique
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]; // swap
        }
    }
    return i + 1 // length of the unique part of the array
};
