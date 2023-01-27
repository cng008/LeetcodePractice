/**
 * @param {number} n
 * @return {string[]}
input: int
output: arr of str, length of input num
Time: O(n)
Space: O(n)
input and output values ints/str?
output order consecutive matter? 1 to n or n to 1
Should the output contain the input value if it is not divisible by 3 or 5? if it is?
is the input range inclusive or exclusive of the endpoints?
 */
// 3 & 5 -> FizzBuzz
// 3 -> Fizz
// 5 -> Buzz
// none -> current number in iteration
const fizzBuzz = (n) => {
    const res = [];

   for (let i = 1; i <= n; i++) { 
        let str = '';

        if (i % 3 === 0) str += 'Fizz';
        if (i % 5 === 0) str += 'Buzz';
        if (str === '') str += i; // neither divisible by 3 nor 5
        res.push(str);
    }
    return res;
}