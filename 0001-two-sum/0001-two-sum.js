/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time: O(n) -> iterate through input array
 * Space: O(n) -> hash map, sacrificed space for time improvement
 */
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])){ // difference of target exists in map
            return [map.get(target - nums[i]), i] // returns indices
        }
        map.set(nums[i], i) // set number as key and indice as value
    }
};


/** BRUTE FORCE
* Time: O(N^2) | Space: O(1)
*/
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++){
//         for (let j = 0; j < nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
//     // assumed that there is a solution
// };
