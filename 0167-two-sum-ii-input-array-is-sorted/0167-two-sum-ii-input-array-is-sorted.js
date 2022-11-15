/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Space: O(n) -> worst case we check all elements in input array
 * Time: O(1) -> no extra space
 */
const twoSum = (numbers, target) => {
    let l = 0,
        r = numbers.length - 1;
    
    while(l <= r){
        if (numbers[l] + numbers[r] === target) return [++l, ++r];
        
        const sum = numbers[l] + numbers[r];
        sum > target ? r-- : l++;
    }
};