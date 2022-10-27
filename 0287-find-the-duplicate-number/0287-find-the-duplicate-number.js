/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n) -> iterate through entire length of array
 * Space: O(1) -> modifies input array
 */
const findDuplicate = (nums) => {
    let i = 0;
    while (i < nums.length){
        if (nums[i] !== i + 1) { // current i is at the incorrect index
            const j = nums[i] - 1 // index where the current i SHOULD be at
            if (nums[i] !== nums[j]){
                [nums[i], nums[j]] = [nums[j], nums[i]] // swap
            } else { // found duplicate
                return nums [i]
            }
        } else {
            i++
        }
    }
};