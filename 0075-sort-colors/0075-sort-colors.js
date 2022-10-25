/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time: 
 * Space: 
 */
const sortColors = (nums) => {
    // all elements < low are 0, all elements > high are 2
    // all elements from >= low < i are 1
    
    let low = 0,
        high = nums.length - 1,
        i = 0
    
    while (i <= high){
        if (nums[i] === 0){
            [nums[i], nums[low]] = [nums[low], nums[i]] // swap
            // increment 'i', 'low'
            i++
            low++
        } else if (nums[i] === 1) {
            i++
        } else {
            [nums[i], nums[high]] = [nums[high], nums[i]] // swap
            // decrement 'high'
            high--
        }
    }
};