/**
 * @param {string} s
 * @return {number}
 * assumptions: str is not empty, lowercase letters only
 * output: integer, length of longest substring of distinct characters
 */
// SLIDING WINDOW, HASH MAP
const lengthOfLongestSubstring = (s) => {
    let maxLength = 0,
        windowStart = 0,
        charIndexMap = {};
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
        const rightChar = s[windowEnd]
        if (rightChar in charIndexMap) {
            // shrink window from start
            // update start to include repeating char
            windowStart = Math.max(windowStart, charIndexMap[rightChar]+1)
        }
        // insert rightChar into the map
        charIndexMap[rightChar] = windowEnd
        // remember the max length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
};


// BRUTE FORCE O (n * k)
// n is total number of elements in the given array, k is size of subarray (if declared)
// nested for loop