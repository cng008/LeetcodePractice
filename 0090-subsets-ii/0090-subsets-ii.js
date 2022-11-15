/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(n * 2^n) -> the number of subsets doubles with each element that is added
 * Space: O(n * 2^n) -> we’ll have 2^n subsets which each can take up to O(n) space
 */
const subsetsWithDup = (nums) => {
    nums.sort((a, z) => a - z); // sort to handle duplicates
    const subsets = []; // output
    subsets.push([]); // start by adding the empty subset
    let startIdx = 0, 
        endIdx = 0;
    
    for (let i = 0; i < nums.length; i++) {
        startIdx = 0; // reset to beginning of subset
        if (i > 0 && nums[i] === nums[i - 1]) { // duplicate elements
            startIdx = endIdx + 1; // start from subsets added in the previous step
        }
        endIdx = subsets.length - 1;
        
        for (let j = startIdx; j < endIdx + 1; j++){ // we want the full length of the subset
            // create new subset from existing/previous subset and add the current element to it
            const clone = subsets[j].slice(0); // copies from startIdx to end of subset
            clone.push(nums[i]);
            subsets.push(clone);
        }
    }
    return subsets;
};