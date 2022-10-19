/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    let result = []
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            // 'FizzBuzz' if % 3 AND 5
            result.push('FizzBuzz')
        } else if (i % 3 === 0) {
            // 'Fizz' if % 3
            result.push('Fizz')
        } else if (i % 5 === 0) {
            // 'Buzz' if % 5
            result.push('Buzz')
        } else {
            // 'num' if neither
            result.push(i.toString())
        }
    }
    
    return result
};
