/**
 * @param {number[]} nums
 * @return {number[]}
 * Time: O(n)
 * Space: O(1)
 */
const findDisappearedNumbers = (nums) => {
    let i = 0
    while (i < nums.length){
        const j = nums[i] - 1 // subtract 1 bc range [1,n] starts at index 0
        if (nums[i] !== nums[j]){
           [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }
    
    const missingNums = []
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== i + 1){ // wrong number is at index
           missingNums.push(i + 1)
           }
    }
    
    return missingNums
};