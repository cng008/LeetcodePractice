/**
 * @param {string} s
 * @return {boolean}
 * Time: O(n) -> iterate through the entire string
 * Space: O(1) -> no extra memory
 */
const isPalindrome = (s) => {  
    s = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/gi, '') // remove non-alpha-num
    let l = 0,
        r = s.length - 1;
    
    while (l <= r) {
        if (s[l] !== s[r]) {
            return false
        }
        // do next comparison
        l++;
        r--;
    }
    return true
};

// BRUTE FORCE
// remove non-alpha-num
// compare to reverse
// problem: creates extra memory to clean up string and to create reverse string