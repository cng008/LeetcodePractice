/**
 * @param {number[]} nums
 * @return {number[]}
 * Time: O(n)
 * Space: O(1)
 */
const findDuplicates = (nums) => {
    let i = 0;
    while (i < nums.length){
        const j = nums[i] - 1 // j is the index i SHOULD be at
        if (nums[i] !== nums[j]){
            [nums[i], nums[j]] = [nums[j], nums[i]] // swap
        } else {
            i++
        }
    }
    
    const duplicates = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== i + 1){ // duplicate found
            duplicates.push(nums[i])
        }
    }
    
    return duplicates;
};