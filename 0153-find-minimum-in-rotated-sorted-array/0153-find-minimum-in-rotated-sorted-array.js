/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(log n) → each time the search is run, length is divided by 2
 * Space: O(1) → only need two variables to keep track of the range of elements that are to be checked
 */
const findMin = (nums) => {
    if (nums.length === 0) return -1;
    
    let l = 0,
        r = nums.length - 1;

    // BINARY SEARCH
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] > nums[r]) {
            // pivot point is on the right half
            l = mid + 1;
        } else {
            // pivot point is on the left half
            r = mid;
        }
    }

    // the minimum element is the pivot point
    return nums[l];
};