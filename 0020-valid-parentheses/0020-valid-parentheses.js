/**
 * @param {string} s
 * @return {boolean}
 *
 input: str of brackets
 output: bool, t if brackets close in correct order
 Time: O(n) -> iterate entire str
 Space: O(n) -> stack
 */
const isValid = (s) => {
    const pairs = {'(' : ')', '{' : '}', '[' : ']'}, // map of bracket pairs
          stack = []; // keeps track of closing brackets
    
    for (let char of s) {
        if (char in pairs) { // character is an open bracket
            stack.push(pairs[char]); // add corresponding closing bracket to the stack
        } else if (stack.length > 0 && stack[stack.length - 1] === char) {  // character is a closing bracket and matches the last bracket in the stack
            stack.pop(); // remove the last bracket from the stack
        } else {  // character is a closing bracket but does not match the last bracket in the stack
            return false; // input string is not valid parens
        }
    }
    return stack.length === 0; // stack is empty, meaning all brackets are correctly paired
};


// ALTERNATE SOLUTION
// const isValid = (s) => {
//     let stack = []
//     const parensMap = { ')' : '(', '}' : '{', ']' : '[' }
    
//     for (const char of s) {
//         // if open paren, add to stack
//         if (!(char in parensMap)) { 
//             stack.push(char) 
//             continue
//         }
//         // check if stack is empty and last val added matches open, pop from stack
//         if (stack[stack.length - 1] === parensMap[char]) { 
//             stack.pop() 
//             continue
//         }
//         return false // no match
//     }
//     return stack.length === 0 // return true if stack empty
// };