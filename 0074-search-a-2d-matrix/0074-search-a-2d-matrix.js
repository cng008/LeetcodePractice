/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Time: O(log n) -> binary search, n is the number of elements in the matrix
 * Space: O(1) -> fixed number of variables to store indices of binary search
 */
const searchMatrix = (matrix, target) => {
    // check if matrix is empty or if target is out of range
  if (matrix.length === 0 || target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) return false;

    // use binary search to find the row that may contain the target
    let top = 0,
        bottom = matrix.length - 1;
    while (top <= bottom) {
        const row = Math.floor((top + bottom) / 2);
        if (matrix[row][0] === target) {
            return true;
        } else if (matrix[row][0] < target) {
            top = row + 1; // search bottom half
        } else { // target < matrix[row][matrix.length - 1]
            bottom = row - 1; // search top half
        }
    }
    
    // use binary search to search for the target in that row
    const row = bottom; // row that may contain the target
    let l = 0, // reset left index for binary search
        r = matrix[row].length - 1; // right index
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] < target) {
            l = mid + 1; // search right half
        } else { // target < matrix[row][mid]
            r = mid - 1; // search left half
        }
    }
    return false;
};

// BRUTE FORCE O(n^2)
// const searchMatrix = (matrix, target) => {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === target) return true;
//         }
//     }
//     return false;
// };