/**
 * @param {number} n
 * @return {string[]}
 * Time: O(n) -> factorial
 * Space: O(n) -> output arr will be length of input
 */

const fizzBuzz = (n) => {
    const res = []; // output array
    
    for (let i = 1; i <= n; i++) {
        let currentStr = '';
        
        if (i % 3 === 0) currentStr += 'Fizz';
        if (i % 5 === 0) currentStr += 'Buzz';
        
        if(currentStr === "") currentStr += i; // neither divisible by 3 nor 5
        
        res.push(currentStr); // push to output array
    }
    
    return res;
};
