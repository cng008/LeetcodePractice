/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time: O(log n) -> each time the search is run, length is divided by 2
 * Space: O(1) -> only need two variables to keep track of the range of elements that are to be checked
 */
const search = (nums, target) => {
    let l = 0,
        r = nums.length - 1;
    
    while (l <= r){
        let midpoint = Math.round(( l + r) / 2); // can't have float as midpoint
        if (nums[midpoint] < target){
            l = midpoint + 1; // search right half
        } else if (nums[midpoint] > target) {
            r = midpoint - 1; // search left half
        } else {
            return midpoint; // target found
        }
    }
    return -1; // target not found
};