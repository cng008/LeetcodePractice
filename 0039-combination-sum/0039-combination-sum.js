/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Time: O(2^n) -> n is the length of the candidates array
 * Space: O(n) -> max depth of the recursive calls is determined by the number of elements in the candidates array
 */
const combinationSum = (candidates, target) => {
    const combinations = []; // stores all valid combinations
    
    // helper function to generate all the combinations
    const generateCombinations = (startIndex, currentSum, currentCombination) => {
        // base case: valid combination
        if (currentSum === target) return combinations.push(currentCombination);
        // base case: current sum is greater than the target, cannot use this combination
        if (currentSum > target) return;
        
        // iterate through the candidates array starting from the startIndex
        for (let i = startIndex; i < candidates.length; i++) {
            const candidate = candidates[i]; // current candidate
            // add candidate to the current combination and increase the current sum by the candidate value
            const newCombination = [...currentCombination, candidate];
            const newSum = currentSum + candidate;
            // recursive call with updated combination and sum
            generateCombinations(i, newSum, newCombination);
        }
    };
    
    // call helper function to generate all combinations
    generateCombinations(0, 0, []);
    
    return combinations;
};

// // Time: O(2^n) -> n is the length of the candidates array
// // Space  O(n) -> since the maximum depth of the recursive calls is determined by the number of elements in the candidates array.
// const combinationSum = (candidates, target, index = 0, currentCombination = [], combinations = []) => {
//     if (target < 0) return combinations; // base case: target - currentCombination is negative
//     if (target === 0) return combinations.push(currentCombination.slice()); // base case: valid combination

//     // iterate through the candidates array starting from the index
//     for (let i = index; i < candidates.length; i++) {
//         // call backTrack function with the current candidate
//         backTrack(candidates, target, i, currentCombination, combinations);
//     }

//     return combinations;
// }

// const backTrack = (candidates, target, i, currentCombination, combinations) => {
//     currentCombination.push(candidates[i]); // add the current candidate to the combination
//         // call the combinationSum function with the updated target and combination
//         combinationSum(candidates, (target - candidates[i]), i, currentCombination, combinations);
//     currentCombination.pop(); // remove the current candidate from the combination
// }
