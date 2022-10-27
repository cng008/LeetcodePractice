/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n) -> only actually iterating through entire arr once
 * Space: O(1) -> swaps in place
 */
const missingNumber = (nums) => {
    let i = 0;
    
    while(i < nums.length){
        let j = nums[i];
        // if current bumber is less than length of array and current # is not at correct index
        if(nums[i] < nums.length && nums[i] !== nums[j]){
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i++; // increment if the current index has the correct number
        }
    }
    
    // now that most numbers match index, iterate to find which index has wrong #
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== i){
            return i;
        }
    }
    
    return nums.length;
};