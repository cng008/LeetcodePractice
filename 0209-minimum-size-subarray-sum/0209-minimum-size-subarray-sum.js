/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * Time: O(n) -> depends on length of arr
 * Space: O(1)
 */
const minSubArrayLen = (target, nums) => {
    let windowSum = 0,
        windowStart = 0,
        minLength = Infinity;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowSum += nums[windowEnd]; // add next element

        // shrink window until windowSum is smaller than target
        while (windowSum >= target){
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }
    
    // no subarray found
    if (minLength === Infinity){
        return 0;
    }
    
    return minLength;
};