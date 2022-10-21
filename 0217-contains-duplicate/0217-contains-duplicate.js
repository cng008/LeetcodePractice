/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    // create an empty set
    let newSet = new Set()
    
    // check if value is in set, add if not found
    for (let num of nums) {
        if (newSet.has(num)) {
            return true
        }
        newSet.add(num)
    }
    
    // no duplicates found
    return false
}