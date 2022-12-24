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
        let mid = Math.floor(( l + r) / 2); // can't have float as midpoint
        // let mid = l + ((r - l) >> 2); // bitwise right shift operator (faster for larger sums)
        
        if (nums[mid] < target){
            l = mid + 1; // search right half
        } else if (nums[mid] > target) {
            r = mid - 1; // search left half
        } else {
            return mid; // target found
        }
    }
    return -1; // target not found
}


// BRUTE FORCE O(n)
// const search = (nums, target) => {
//     for (let n in nums) {
//         if (nums[n] === target) return n;
//     };
//     return -1;
// };