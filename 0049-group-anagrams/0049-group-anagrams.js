/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/** 
 * Time: O(m*n log n) -> sorting, n is the number of strings, m is the average length of the strings
 * Space: O(m*n) -> map stores a copy of each string
 */
const groupAnagrams = (strs) => {
    const map = new Map(); // for storing the anagram groups
    for (let str of strs) {
        // sort the characters in the string alphabetically
        const sortedStr = str.split('').sort().join('');
       // obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
        if (map.has(sortedStr)) { // sorted str exists in map
            map.get(sortedStr).push(str); // add original str to list of values
        } else {
            map.set(sortedStr, [str]); // create new entry, sorted string(key): original string(value)
        }
    }
    return [...map.values()]; // return the values of the Map as an array
};


/**
 * Time: O(m*n) ->   n is the number of strings, m is the average length of the strings
 * Space: O(m*n) -> map stores a copy of each string
*/
// const groupAnagrams = (strs) => {
//   const map = new Map();
//   for (let str of strs) {
//     // Initialize an array to count the frequency of each letter in the string
//     // The array has 26 elements, one for each letter of the alphabet
//     const count = new Array(26).fill(0);
//     for (let ch of str) {
//         // Increment the count for the corresponding letter in the count array
//         // The charCodeAt() method returns the Unicode code point for the character, and subtracting 97 from it gives the index in the count array (since 'a' has code point 97)
//         count[ch.charCodeAt() - 97]++; // counts the frequency of each letter in the string
//     }
//     // Convert the count array to a string and use it as the key in the Map
//     const key = count.join("#");
//     if (map.has(key)) { // map already has an entry for this key
//       map.get(key).push(str); // append the current string to the list of values
//     } else {
//       map.set(key, [str]); // create a new entry in the Map with the current string as the value
//     }
//   }
//   return [...map.values()]; // return the values of the Map as an array
// };