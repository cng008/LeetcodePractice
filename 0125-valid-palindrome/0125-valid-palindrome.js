/**
 * @param {string} s
 * @return {boolean}
 * Time: O(n)
 * Space: O(n)
 */
const isPalindrome = (s) => {  
    // ensure characters are lowercase and alphanumeric
    s = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/gi, "")
    let l = 0,
        r = s.length - 1
    
    while (l <= r){
        if (s[l] !== s[r]) {
            return false
        }
        // do next comparison
        l++
        r--
    }
    return true
};