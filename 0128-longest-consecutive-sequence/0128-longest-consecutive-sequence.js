/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n) -> iterate through entire input array to insert into set
 * Space: O(n) -> size of input arr for set
 */
const longestConsecutive = (nums) => {
    if (nums.length == 0) return 0 // edge case: empty input
    const newSet = new Set(nums); // creates a set with input
    let longest = 0;
    
    for (let n of nums) {
        // check if n is start of a sequence
        if (!(newSet.has(n - 1))) {
            let length = 0;
            while (newSet.has(n + length)) { // checks current number
                length += 1;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
};

//  BRUTE FORCE
// sort
// iterate through nums and count consecutive nums
// const longestConsecutive = (nums) => {
//     if(nums.length == 0) return 0
    
//     let longest = 1,
//         count = 1;
//     nums.sort((a, z) => a - z)

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] - nums[i - 1] == 1) {     
//             count = count+1 ;                      
//             longest = Math.max(longest, count)          
//         } else if (nums[i] == nums[i - 1]) continue   
//         else {
//             count = 1
//         }
//     }
//     return longest;
// };