/**
 * @param {string} s
 * @return {boolean}
 Time: O(n) -> iterate entire input
 Space: O(n) -> new str size of input (worst case)
 input: str (letters, nums valid)
 output: bool t/f
 */
const isPalindrome = (s) => {
    let newStr = cleanUp(s);
    // initialize pointers for the left and right sides of the string
    let left = 0,
        right = newStr.length - 1;

    while(left < right){
        // characters at the left and right pointers do not match
        if(newStr[left] !== newStr[right]) return false;
        // increment pointers
        left++;
        right--;
    }
    return true;
};


// clean up the input string by converting to lowercase and extracting alphanumeric characters
const cleanUp = (str) => {
    let newStr = ''; // initialize an empty string to store the cleaned up string
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // a string of all alphanum chars to check against

    for(let char of str) {
        let lowerCased = char.toLowerCase(); 
        // if the character is an alphanumeric character, add it to the new string
        if(characters.indexOf(lowerCased) !== -1) { 
            newStr += lowerCased;
        }
    }
   	return newStr; // return the cleaned up string
}


/** ASCII 
 * Time: O(n) -> iterate through the entire string
 * Space: O(1) -> no extra memory
 */
// const isPalindrome = (s) => {  
//     s = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/gi, '') // remove non-alpha-num
//     let l = 0,
//         r = s.length - 1;
    
//     while (l <= r) {
//         if (s[l] !== s[r]) {
//             return false
//         }
//         // do next comparison
//         l++;
//         r--;
//     }
//     return true
// };

// BRUTE FORCE
// remove non-alpha-num
// compare to reverse
// problem: creates extra memory to clean up string and to create reverse string
