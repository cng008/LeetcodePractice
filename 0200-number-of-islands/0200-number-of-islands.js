/**
 * @param {character[][]} grid
 * @return {number}
 * Time: O(m * n) → m is number of rows, n is number of columns	
 * Space: O(m * n) → m is number of rows, n is number of columns of the input matrix
 */
const numIslands = (grid) => {
    const rows = grid.length,
        cols = grid[0].length;
    let islandCount = 0;
    
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1){ // cell is land
                islandCount++; // island found
                visitIslandsDFS(grid, i, j) // visit surrounding cells
            }
        }
    }
    return islandCount;
};

const visitIslandsDFS = (grid, row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return; // not a valid cell
    if (grid[row][col] == 0) return; // cell is water (0)
    grid[row][col] = 0; // mark as visited

    // recursively visit surrounding cells until there are no surrounding islands
    visitIslandsDFS(grid, row + 1, col); // lower cell
    visitIslandsDFS(grid, row - 1, col); // upper cell
    visitIslandsDFS(grid, row, col + 1); // right cell
    visitIslandsDFS(grid, row, col - 1); // left cell
}

// const visitIslandsBFS = (grid, x, y) => {
    // const neighbors = [[x,y]]  // start queue

    // while (neighbors.length > 0){
    //     const cell = neighbors.shift() // get first from queue
    //     const row = cell[0]
    //     const col = cell[1]

    //     if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return; // not a valid cell
    //     if (grid[row][col] == 0) return; // cell is water (0)
    //     grid[row][col] = 0; // mark as visited

    //     // recursively visit surrounding cells until there are no surrounding islands
    //     visitIslandsBFS(grid, row + 1, col); // lower cell
    //     visitIslandsBFS(grid, row - 1, col); // upper cell
    //     visitIslandsBFS(grid, row, col + 1); // right cell
    //     visitIslandsBFS(grid, row, col - 1); // left cell
    //     }
// }