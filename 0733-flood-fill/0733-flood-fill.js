/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    if (image[sr][sc] !== color){
        // update to new color after visiting
        fillDFS(image, sr, sc, image[sr][sc], color)
    }
    return image
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
}