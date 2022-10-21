/**
 * @param {string} s
 * @return {boolean}
 * Time: O(n)
 * Space: O(n)
 */
const isValid = (s) => {
    let stack = []
    const parensMap = { ')' : '(', '}' : '{', ']' : '[' }
    
    for (const char of s) {
        // if open paren, add to stack
        if (!(char in parensMap)) { 
            stack.push(char) 
            continue
        }
        // check if stack is empty and last val added matches open, pop from stack
        if (stack[stack.length - 1] === parensMap[char]) { 
            stack.pop() 
            continue
        }
        return false // no match
    }
    return stack.length === 0 // return true if stack empty
};