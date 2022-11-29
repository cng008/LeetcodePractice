/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(n^2) -> sorting, search pair for every number in the input arr
 * Space: O(n) -> required for sorting
 */
const threeSum = (nums) => {
    nums.sort((a, z) => a - z); // sort array, mutates original -> O(NlogN)
    const results = []; // initialize variable to hold result
    for (i = 0; i < nums.length; i++){
        // skip same consecutive numbers
        if (i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        searchPair(nums, -nums[i], i + 1, results);
    }
    return results;
};

const searchPair = (nums, targetSum, left, results) => {
    let right = nums.length - 1;
    while(left < right){
        // if sum of numbers at left+right pointers equals target
        const currentSum = nums[left] + nums[right]
        if(currentSum === targetSum){
            results.push([-targetSum, nums[left], nums[right]])
            left++;
            right--;
            // checks to avoid duplicate results
            while(left < right && nums[left] === nums[left - 1]){
                left++; // skip same element to avoid duplicate triplets
            }
            while(left < right && nums[right] === nums[right + 1]){
                right--; // skip same element to avoid duplicate triplets
            }
        } else if (currentSum > targetSum) {
            right--; // need a pair with a smaller sum
        } else {
            left++; // need a pair with a bigger sum
        }
    }
}


// BRUTE FORCE O(N^3)
// 3 nested loops
// keep track of current sum