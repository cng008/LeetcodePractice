/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time: O(s + t) -> O(n) -> iterate through both strings
 * Space: O(s + t) -> O(n) -> for hash map
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false; // edge case
    const newMap = new Map();
    
    for (let char of s){
        // add to map, add 1 to value if already exists in map
        newMap[char] = (newMap[char] || 0) + 1;
    }
    for (let char of t){
       if (!newMap[char]) return false; // char DNE in s
        newMap[char]--; // subtract count from map
    }
    return true; // same amount of chars in s & t
};