/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Time: O(n) -> number of characters in the input string	
 * Space: O(1) -> only 26 chars in the alphabet
 */
const characterReplacement = (s, k) => {
    let windowStart = 0,
        maxLength = 0,
        maxRepeatLetterCount = 0,
        freqMap = {};
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        if (!(rightChar in freqMap)) {
            freqMap[rightChar] = 0;
        }
        freqMap[rightChar]++;
        
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, freqMap[rightChar])
        
        // shrink window if remaining letters are more than 'k'
        while ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
            let leftChar = s[windowStart];
            freqMap[leftChar]--; // decrement from map
            windowStart++; // shrink window from beginning
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};

// var characterReplacement = function(s, k) {
//     let left = 0, right = 0, mostFreq = 0, maxLen = 0;
//     let freqMap = {};
    
//     for(right = 0; right < s.length; right++) {
//         freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
//         mostFreq = Math.max(freqMap[s[right]], mostFreq);
        
//         while(right-left+1 - mostFreq > k) {
//             freqMap[s[left]] -= 1;
//             left++;
//         }
//         maxLen = Math.max(right-left+1, maxLen);
//     }
//     return maxLen;
// };