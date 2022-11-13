/**
 * @param {number[]} nums
 * @return {boolean}
 * Time: O(n) -> iterate through entire input
 * Space: O(n) -> hash set
 */
const containsDuplicate = (nums) => {
  const set = new Set(); // create an empty set
    
     // check if value is in set, add if not found
    for (let n of nums){
        if (set.has(n)){
            return true
        } else {
            set.add(n)
        }
    }
    return false  // no duplicates found
}