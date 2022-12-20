/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Time: O(n) -> iterate through entire array
 * Space: O(1) -> modify s in-place
 */
const reverseString = (s) => {
    // Brute force: O(n) time, O(1) space
    // return s.reverse() 
    
    let l = 0,
        r = s.length - 1;
    
    while (l < r) {
        // swap the characters at the left and right pointers
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        // [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
    return s;
};