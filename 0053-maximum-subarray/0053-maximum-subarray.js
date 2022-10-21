/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let maxSum = nums[0],
        windowSum = 0,
        windowStart = 0;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowSum += nums[windowEnd]
        
        if (windowSum > maxSum) {
            maxSum = windowSum
        }

        while (windowSum < 0){
            windowSum -= nums[windowStart]
            windowStart++
        }
    }
    return maxSum
};