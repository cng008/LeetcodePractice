/**
 * @param {number[]} nums
 * @return {number}
input: arr (int, +/-, unsorted)
output: int (count of longest consecutive seq)
Time: O(n) -> interate entire arr to insert into set
Space: O(n) -> size of input arr for set
edge cases: empty input => 0, duplicates?
 */
const longestConsecutive = (nums) => {
    const set = new Set(nums);
    let longest = 0;

    if (nums.length == 0) return longest // edge case: empty input

    for (let n of nums ){
        // check if start of sequence by checking if n-1 exists in set
        if (!set.has(n - 1)) {
            let length = 0;
            while (set.has(n + length)) { // checks current number
                // continue adding to length if n+length
                length += 1; //length++
            }
            // compare longest to length once loop breaks
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