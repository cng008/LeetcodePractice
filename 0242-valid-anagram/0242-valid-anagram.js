/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time: O(s + t) -> O(n) -> iterate through both strings
 * Space: O(s + t) -> O(n) -> for hash map
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false; // edge case
    // 1. sort, compare Time: O(n + n) | Space: O(1) -> in place
    // return s.split('').sort().join('') === t.split('').sort().join('');
    
    // 2. map, compare Time: O(n + n) | Space: O(n) -> map
    const map = new Map();
    
    for (let char of s){
        // add to map, add 1 to value if already exists in map
        map[char] = (map[char] || 0) + 1;
    }
    for (let char of t){
       if (!map[char]) return false; // char DNE in s
        map[char]--; // subtract count from map
    }
    return true; // same amount of chars in s & t
};