/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
input: arr (int, +/-, nonempty, sorted asc), int (+/-)
output: arr (pair of indicies that equal to target)
Time: O(n) -> worst case traverse entirety
Space: O(1) -> constant space
edge cases: ?
 */
const twoSum = (numbers, target) => {
    let l = 0,
        r = numbers.length - 1;
    
    while (l <= r){
        const sum = numbers[l] + numbers[r];
        if (sum === target) return [l + 1, r + 1];
        sum < target ? l++ : r--;
    }
};

// BRUTE FORCE O(n^2)
// nested loop and compare current to rest 
// continue for rest of indicies