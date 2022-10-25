/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(n^2)
 * Space: O(n)
 */
const threeSum = (nums) => {
    nums.sort((a, z) => a - z) // sort array, mutates original -> O(NlogN)
    const triplets = [] // initialize variable to hold result
    for (i = 0; i < nums.length; i++){
        // skip same consecutive numbers
        if (i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        searchPair(nums, -nums[i], i + 1, triplets)
    }
    return triplets
};

const searchPair = (nums, targetSum, left, triplets) => {
    let right = nums.length - 1
    while(left < right){
        // if sum of numbers at left+right pointers equals target
        const currentSum = nums[left] + nums[right]
        if(currentSum === targetSum){
            triplets.push([-targetSum, nums[left], nums[right]])
            left++
            right--
            // checks to avoid duplicate results
            while(left < right && nums[left] === nums[left - 1]){
                left++ // skip same element to avoid duplicate triplets
            }
            while(left < right && nums[right] === nums[right + 1]){
                right-- // skip same element to avoid duplicate triplets
            }
        } else if (targetSum > currentSum){
            left++ // need a pair with a bigger sum
        } else {
            right-- // need a pair with a smaller sum
        }
    }
}