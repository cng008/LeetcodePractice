/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time: O(n) -> iterating through the array once to reverse it
 * Space: O(1) 
 */
const rotate = (nums, k) => {
    k = k % nums.length; //  edge case: k > length of nums

    // reverse entire array
    reverse(nums, 0, nums.length - 1);

    // reverse first k elements
    reverse(nums, 0, k - 1);

    // reverse remaining elements
    reverse(nums, k, nums.length - 1);
};

const reverse = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}