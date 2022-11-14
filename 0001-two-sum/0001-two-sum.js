/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time: O(n) -> iterate through input array
 * Space: O(n) -> hash map
 */
const twoSum = (nums, target) => {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) { // difference of target exists in map
            return [map.get(target - nums[i]), i]; // returns indices
        } else {
            map.set(nums[i], i); // set number as key and indice as value
        }
    }
    return []; // edge case
};

