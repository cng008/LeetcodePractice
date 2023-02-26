/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
input: arr (ints, pos/neg, sorted, unique, non-empty)
output: int (pos/neg); return -1 if not found
Time: O(log n) -> binary search
Space: O(n) -> no extra mem
 */
const search = (nums, target) => {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2); // can't have float as midpoint
        // let mid = l + ((r - l) >> 2); // bitwise right shift operator (faster for larger sums)
        
        if (nums[mid] === target) { // target found
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1; // search right half
        } else { // target < nums[mid]
            r = mid - 1; // search left half
        }
    }

    return -1; // target not found
};


// BRUTE FORCE O(n)
// const search = (nums, target) => {
//     for (let n in nums) {
//         if (nums[n] === target) return n;
//     };
//     return -1;
// };