/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    let result = []
    for (let i=1; i<=n; i++){
        let currentString = "";
        
        if(i % 3 === 0) currentString += "Fizz";
        if(i % 5 === 0) currentString += "Buzz";

        if(currentString === "") currentString += i;

        result.push(currentString);
    }
    return result
};
