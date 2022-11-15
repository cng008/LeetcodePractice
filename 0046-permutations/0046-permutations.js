/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(n * n!) -> n insertions, n! permutations
 * Space: O(n * n!) -> output, queue to store the intermediate permutations
 */
const permute = (nums) => {
    let result = [],
        permutations = [];
    permutations.push([]);
    
    for (let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];
        // take all existing permutations and add the current number to create new permutations
        const n = permutations.length;
        for (let p = 0; p < n; p++){
            const oldPermutation = permutations.shift()
            
            // create a new prmutation by adding the current nunber at every position
            for (let j = 0; j < oldPermutation.length + 1; j++){
                const newPermutation = oldPermutation.slice(0); // clone the permutation
                newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j'
                // we only want permutations of the same size as the input array
                if (newPermutation.length === nums.length){ 
                    result.push(newPermutation);
                } else {
                    permutations.push(newPermutation); // push to permutations array
                }
            }
        }
    }
    return result;
};