/**
 * @param {number[]} height
 * @return {number}
input: arr (int, +, nonempty, unsorted, dupes)
output: int (area of container)
Time: O(n) -> iterate entire arr
Space: O(1) -> constant space
edge cases: duplicate heights
 */
// TWO POINTERS
const maxArea = (height) => {
    let l = 0,
        r = height.length - 1,
        max = 0;
    
    while (l < r) {
        const currArea = (r - l) * Math.min(height[l], height[r]); // compute area
        max = Math.max(max, currArea); // update max
        
        if (height[l] < height[r]) {
            l++;
        } else { // if l > r || l === r
            r--; 
        }
    }
    return max;
};


// BRUTE FORCE O(N^2) -> time limit exceeded
// const maxArea = (height) => {
//     let res = 0;
    
//     for (let l = 0; l < height.length; l++) {
//         for (let r = l + 1; r < height.length; r++) {
//             let area = (r - l) * Math.min(height[l], height[r]); // compute area
//             res = Math.max(res, area); // update max
//         }
//     }
//     return res;
// };

