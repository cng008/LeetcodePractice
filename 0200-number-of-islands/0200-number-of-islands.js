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
                visitIslandsBFS(grid, i, j)
            }
        }
    }
    return islandCount;
};

const visitIslandsBFS = (grid, x, y) => {
    // start queue
    const neighbors = [[x,y]]
    while (neighbors.length > 0){
        // get first from queue
        const cell = neighbors.shift()
        const row = cell[0]
        const col = cell[1]
    // if not a valid cell, return
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
    // if cell is water (0), return
    if (grid[row][col] === '0') return;
    // update input matrix after visiting
    grid[row][col] = '0';

    // recursively visit surrounding cells until there are no surrounding islands
    visitIslandsBFS(grid, row + 1, col); // lower cell
    visitIslandsBFS(grid, row - 1, col); // upper cell
    visitIslandsBFS(grid, row, col + 1); // right cell
    visitIslandsBFS(grid, row, col - 1); // left cell
    }
}