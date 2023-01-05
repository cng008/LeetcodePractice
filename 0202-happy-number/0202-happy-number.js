/**
 * @param {number} n
 * @return {boolean}
 * Time: O(k) -> k is the number of times the sequence must be iterated before it either reaches 1 or enters an unhappy loop
 * Space: O(n) -> n is the input number
 */
const isHappy = (n) => {
     // Keep track of the numbers we have seen
    const seen = new Set();
    
    // Iterate until we either find a happy number or an unhappy loop
    while (n !== 1) {
        // Calculate the next number in the sequence
        n = sumOfSquares(n);
        
        // If we have seen this number before, then it is an unhappy loop and n is not a happy number
        if (seen.has(n)) return false;
        
        // Otherwise, add the number to the set of seen numbers
        seen.add(n);
    }
    
    return true;
};

const sumOfSquares = (n) => {
    let sum = 0;
    
    // Calculate the sum of the squares of the digits of n
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    
    return sum;
};


/** FAST/SLOW POINTERS
* Time Complexity: O(log n)
* Space Complexity: O(1)
*/
// var isHappy = function(n) {
//     let slow = n,
//         fast = n;
    
//     while(true){
//         slow = findSquareSum(slow); // move one step
//         fast = findSquareSum(findSquareSum(fast)); // move two steps 
        
//         if(slow === fast){ // found the cycle so we can now stop the while loop
//             break;
//         }
//     }
//     return slow === 1; // see if the cycle is stuck on the number 1
// };


// function findSquareSum(num){
//     let sum = 0;
    
//     // takes the num and calculates the square of each digit
//     while(num > 0){
//         let digit = num % 10; // access individual digit using modulo operator 
        
//         sum += digit * digit; // square of 1 digit 
//         num = Math.floor(num / 10); // set up next iteration
//     }
//     return sum;
// }