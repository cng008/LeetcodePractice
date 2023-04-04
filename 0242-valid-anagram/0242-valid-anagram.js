/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
input: str (only alpha, lowercase, nonempty)
output: bool (t if valid anagram)
Time: O(n + m) => iterate length of both s,t
Space: O(n) -> hash map
edge cases: not same lengths 
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const map = new Map();

    for (let char of s) {
        // add to map, add 1 to value if already exists in map
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    for (let char of t) {
        if (!map.has(char)) return false; // char DNE in s
        map.set(char, map.get(char) - 1); // subtract count from map
        if (map.get(char) < 0) return false; // in t but not in s
    }
    return true;

    // const map = {};

    // for (let char of s) {
    //     map[char] = (map[char] || 0) + 1;
    // }
    
    // for (let char of t) {
    //     if (!map[char]) return false;
    //     map[char]--;
    //     if (map[char] < 0) return false
    // }
    // return true

}

// ALT | sort, compare Time: O(n + n) | Space: O(1) -> in place
// const isAnagram = (s, t) => {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// }