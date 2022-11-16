/**
 * @param {string} s
 * @return {string[]}
 * Time: O(n * 2^n) -> process each permutation and convert it into a character array
 * Space: O(n * 2^n) -> output list
 */
const letterCasePermutation = (s) => {
    const permutations = []; // output array
    permutations.push(s);
    
    // process every char in the string
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) { // skips digits
            const n = permutations.length;
            
            // take all existing permutations and change the letter case appropriately
            for (let j = 0; j < n; j++) {
                const arr = permutations[j].split(''); // string to array
                // flip case
                if (arr[i] === arr[i].toLowerCase()){
                    arr[i] = arr[i].toUpperCase();
                } else {
                    arr[i] = arr[i].toLowerCase();
                }
                permutations.push(arr.join('')); // array to string
            }
        }
    }
    return permutations;
};