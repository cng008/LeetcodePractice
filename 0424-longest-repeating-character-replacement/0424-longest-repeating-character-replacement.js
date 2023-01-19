/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Time: O(n) -> iterate through entire s
 * Space: O(1) -> english alphabet has a fixed number of chars (26)
 */
// input: only uppercase English letters
// output: int (length of longest substring)
// edge cases

// TRACK
    // use a map/obj to keep track of char count
    // window start
    // max length
    // letter that has higher freq in map
// window end - window start + 1 - maxRepeatLetterCount
// calculates remainding numbers in substr that

const characterReplacement = (s, k) => {
    const freqMap = {}; // keep track of the frequency of each character
    let windowStart = 0, // keep track of the start of the window
        maxLength = 0, // keep track of the max length of the substring
        maxRepeatLetterCount = 0; // keep track of the max frequency of a character
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let r = s[windowEnd]; // get current character
        freqMap[r] = (freqMap[r] || 0) + 1; // check if in map, init if no, increment if yes
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, freqMap[r]); // update if necessary
        // check if the number of characters that need to be replaced is greater than k
        if ((windowEnd - windowStart + 1) - maxRepeatLetterCount > k) {
            // shrink window from start
            freqMap[s[windowStart]]--; 
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1); // update maxLength if necessary
    }
    return maxLength;
};


// using Map() instead of using object literal
// const characterReplacement = (s, k) => {
//     const freqMap = new Map();
//     let windowStart = 0;
//     let maxLength = 0;
//     let maxRepeatLetterCount = 0;
    
//     for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
//         let r = s[windowEnd];
//         freqMap.set(r, (freqMap.get(r) || 0) + 1);
//         maxRepeatLetterCount = Math.max(maxRepeatLetterCount, freqMap.get(r));
//         if ((windowEnd - windowStart + 1) - maxRepeatLetterCount > k) {
//             freqMap.set(s[windowStart], freqMap.get(s[windowStart]) - 1);
//             windowStart++;
//         }
//         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//     }
//     return maxLength;
// };
