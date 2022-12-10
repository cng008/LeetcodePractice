/**
 * @param {number[]} height
 * @return {number}
 * Time: O(n) -> iterate through the entire array
 * Space: O(1) -> constant space
 */
// TWO POINTERS
const maxArea = (height) => {
    let l = 0,
        r = height.length - 1, 
        max = 0;
    
    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r]); // compute area
         max = Math.max(max, area); // update max
        
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

