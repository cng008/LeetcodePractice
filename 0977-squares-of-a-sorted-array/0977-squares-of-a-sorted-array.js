/**
 * @param {number[]} nums
 * @return {number[]}
input: arr (ints, +/-, sorted, nonempty)
output: arr (squared and sorted)
Time: O(n) -> iterate through entire array
Space: O(n) -> depends on input
 */
const sortedSquares = (nums) => {
    let l = 0,
        r = nums.length - 1,
        squared = []; // create an empty array to store the squared values
    
    // iterate until the pointers meet in the middle
    while (l <= r) {
        // left square larger
        if (nums[l]**2 > nums[r]**2) {
            squared.unshift(nums[l]**2);
            l++;
        } else { // right square is larger
            squared.unshift(nums[r]**2);
            r--;
        }
    }
    return squared;
};

/**BRUTE FORCE
Time: O(n log n) -> mapping, sorting
Space: O(n) -> sorting
*/ 
// const sortedSquares = (nums) => {
//     return nums.map(n => n**2).sort((a,b) => a - b)
// };