/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n) -> count of numbers in the input array
 * Space: O(1) -> int
 */
const longestSubarray = (nums) => {
    let windowStart = 0,
        maxLength = 0,
        zeros = 0;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] === 0)  zeros++;
        while (zeros > 1) { // should not have more than one 0 in window
            if (nums[windowStart] === 0) zeros--; // decrement zero from count
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart);
    }
    
    return maxLength;
};