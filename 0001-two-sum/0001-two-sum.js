/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
input: arr (int, +/-, unsorted, dupes ok), target (int, +/-)
output: arr (pair of idx where the el at the idx sum to target)
Time: O(n) -> iterate once
Space: O(n) -> hash map
edge cases: empty input
 */
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) return [map.get(target - nums[i]), i] // returns indices
        map.set(nums[i], i) // set number as key and indice as value
     }
}

// ALT SOLUTON
// const twoSum = (nums, target) => {
//    let numMap = {};

//    for (let i = 0; i < nums.length; i++){
//        let num = nums[i];

//        if ((target - num) in numMap) return [numMap[target - num], i];
//        numMap[num] = i;
//    }
// }

// BRUTE FORCE Time O(n^2) | Space: O(1)
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j]
//         }
//      }
// }