/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    const rows = grid.length,
        cols = grid[0].length;
    let islandCount = 0;
    
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++) {
            // if cell is land
            if (grid[i][j] === '1'){
                // island found
                islandCount++;
                // visit surrounding cells
                visitIslandsDFS(grid, i, j)
            }
        }
    }
    return islandCount;
};

const visitIslandsDFS = (grid, x, y) => {
    // if not a valid cell, return
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return;
    // if cell is water (0), return
    if (grid[x][y] === '0') return;
    // update input matrix after visiting
    grid[x][y] = '0';

    // recursively visit surrounding cells until there are no surrounding islands
    visitIslandsDFS(grid, x + 1, y); // lower cell
    visitIslandsDFS(grid, x - 1, y); // upper cell
    visitIslandsDFS(grid, x, y + 1); // right cell
    visitIslandsDFS(grid, x, y - 1); // left cell
}