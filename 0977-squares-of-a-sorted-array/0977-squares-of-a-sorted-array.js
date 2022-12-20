/**
 * @param {number[]} nums
 * @return {number[]}
 * Time: O(n) -> iterate through entire array
 * Space: O(n) -> depends on input
 * 
 */
const sortedSquares = (nums) => {
    let l = 0,
        r = nums.length - 1,
        squared = []; // create an empty array to store the squared values
    
    // iterate until the pointers meet in the middle
    while (l <= r) {
        // left square larger
        if (nums[l]**2 > nums[r]**2) {
            squared.unshift(nums[l]**2)
            l++
        } else { // right square is larger
            squared.unshift(nums[r]**2)
            r--
        }
    }
    return squared
    
    /** Brute force
     * Time: O(n log n) -> iterate through entire array and sorting
     * Space: O(n) -> creating a copy of input with .map()
     */
    // return nums.map(n =>  n**2).sort((a, b) => a - b)
};