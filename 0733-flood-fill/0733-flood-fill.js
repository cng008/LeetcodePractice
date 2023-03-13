/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
input: matrix grid, coordinates, new color
output: coordinates of changed colors
Time: O(m * n) -> check each cell in grid
Space: O(m * n) -> recursion
edge cases: coordinate is already === color
 */
const floodFill = (image, sr, sc, color) => {
    const originalColor = image[sr][sc]; // original color of the starting pixel
    if (originalColor !== color){
        // update to new color after visiting
        fillDFS(image, sr, sc, originalColor, color)
    }
    return image // modified image
};

// DFS
const fillDFS = (image, x, y, oldColor, newColor) => {
    // ensure cell is valid
    if (x < 0 || x >= image.length || y < 0 || y >= image[0].length) return
    // is not the value we clicked on
    if (image[x][y] !== oldColor) return
    
    image[x][y] = newColor // update cell to new color
    
    // recursively visit surrounding cells
    fillDFS(image, x + 1, y, oldColor, newColor) // lower cell
    fillDFS(image, x - 1, y, oldColor, newColor) // upper cell
    fillDFS(image, x, y + 1, oldColor, newColor) // right cell
    fillDFS(image, x, y - 1, oldColor, newColor) // left cell
};

// BFS
// const fillBFS = (image, x, y, oldColor, newColor) => {
//     const neighbors = [[x,y]]
//     while (neighbors.length > 0){
//         const cell = neighbors.shift()
//         const row = cell[0]
//         const col = cell[1]
//     }
//     // ensure cell is valid
//     if (x < 0 || x >= image.length || y < 0 || y >= image[0].length) return
//     // is not the value we clicked on
//     if (image[x][y] !== oldColor) return
    
//     image[x][y] = newColor // update cell to new color
    
//     // recursively visit surrounding cells
//     fillBFS(image, x + 1, y, oldColor, newColor) // lower cell
//     fillBFS(image, x - 1, y, oldColor, newColor) // upper cell
//     fillBFS(image, x, y + 1, oldColor, newColor) // right cell
//     fillBFS(image, x, y - 1, oldColor, newColor) // left cell
// }