/**
 * @param {number[]} nums
 * @return {number[][]}
input: arr (int, +/-, unsorted, nonempty)
output: arr (triplets)
Time: O(nlogn)+O(n^2)=>O(n^2) -> sorting, search pair for every number in the input arr
Space: O(n) -> required for sorting
edge cases: 
 */
const threeSum = (nums) => {
    nums.sort((a, z) => a - z); // sort array, mutates original -> O(NlogN)
    const res = []; // initialize variable to hold result

    for (let i = 0; i < nums.length; i++) {
        // skip same consecutive numbers
        if (i > 0 && nums[i] === nums[i-1]) continue; // not first value in nums && same value as before
        findPair(nums, -nums[i], i+1, res);
    }
    return res;
};

const findPair = (nums, targetSum, l, res) => {
    let r = nums.length - 1;
    while (l < r) {
        const currSum = nums[l] + nums[r];
        if (currSum === targetSum) { // base case
            res.push([-targetSum, nums[l], nums[r]]);
            l++;
            r--;
            // skip same element to avoid duplicate triplets
            while (nums[l] === nums[l-1]) l++;
            while (nums[r] === nums[r+1]) r--;
        } else if (currSum < targetSum) {
            l++; // need a pair with a bigger sum
        } else {
            r--; // need a pair with a smaller sum
        }
    }
}

// ALT O(n^2)
// hash map with nested for loop

// BRUTE FORCE O(n^3)
// triple nested loop