/**
 * @param {string} s
 * @return {number}
input: str
output: longest substr of repeating chars (int)
Time: O(n)
Space: O(n)
 */
// SLIDING WINDOW, HASH MAP
const lengthOfLongestSubstring = (s) => {
    let maxLength = 0, // store the maximum length of a substring
        windowStart = 0, // store the start index of the current substring
        charIndexMap = {}; // stores the last index of each character
    
    // tterate through each char in the string
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
        const rightChar = s[windowEnd]
        if (rightChar in charIndexMap) {
            // shrink window from start
            // update start to include repeating char
            windowStart = Math.max(windowStart, charIndexMap[rightChar]+1)
        }
         // update the map with the current character's index
        charIndexMap[rightChar] = windowEnd
        // update maxLen of a substring if the curr substring's length > current maximum
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
};


// BRUTE FORCE O (n^3) -> for each character in the input string, we are generating all possible substrings starting from that character and checking each one for repeating characters
// nested for loop
// generate all possible substrings of the input string, and check for each substring if it contains any repeating characters. If a substring does not contain any repeating characters, then we can compare its length with the current maximum length and update the maximum length if necessary