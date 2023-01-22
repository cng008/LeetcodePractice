/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 input: 2 strings (lowercase, letters only)
 output: bool, t if s is anagram of t
 Time: O(n + m) => iterate length of both s,t
 Space: O(n) -> hash map
 edge cases: not same lengths 
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false // edge case
    const map = new Map();

    for (let char of s) {
         // add to map, add 1 to value if already exists in map
        let charCount = map.get(char) || 0;
        map.set(char, charCount + 1);
    }

    for (let char of t) {
        if (!map.has(char)) return false; // char DNE in s
        if (map.get(char) <= 0) return false; // count is not neg
        map.set(char, map.get(char) - 1); // subtract count from map
    }
    return true; // same amount of chars in s & t
}

// 2. map, compare Time: O(m + n) | Space: O(n) -> map
// const isAnagram = (s, t) => {
//     if (s.length !== t.length) return false;
//     const map = {};
//     for (let char of s) {
//     map[char] = (map[char] || 0) + 1;
//     }
//     for (let char of t) {
//         if (!map[char]) return false;
//         map[char]--;
//     }
//     return true;
// }

// 1. sort, compare Time: O(n + n) | Space: O(1) -> in place
// const isAnagram = (s, t) => {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// }