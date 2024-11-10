// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the to

function validateSudokuBoard(board) {
    let row = new Map();
    let column = new Map();
    let grid = new Map();

    //initialize Row and column
    for (let i = 0; i < 9; i++) {
        row.set(i, new Map());
        column.set(i, new Map());
        grid.set(i, new Map());
    }



    //add values to row and column
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let value = board[i][j];
            if (value !== ".") {
                //row.get(row)
                if (row.get(i).has(value)) {
                    return false;
                }
                row.get(i).set(value, 1)

                if (column.get(j).has(value)) {
                    return false;
                }
                column.get(j).set(value, 1)

                //check subgrid
                let subGridindex = Math.floor(i / 3)* 3 + Math.floor(j / 3);
                if(grid.get(subGridindex).has(value)){
                    return false;
                }
                grid.get(subGridindex).set(value, 1);
            }
        }
    }

    console.log("row",row);
    console.log("column",column);

    return true;

}

let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let board2 = [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


let board3 = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."]
,   [".", "4", ".", "3", ".", ".", ".", ".", "."]
,   [".", ".", ".", ".", ".", "3", ".", ".", "1"]
,   ["8", ".", ".", ".", ".", ".", ".", "2", "."]
,   [".", ".", "2", ".", "7", ".", ".", ".", "."]
,   [".", "1", "5", ".", ".", ".", ".", ".", "."]
,   [".", ".", ".", ".", ".", "2", ".", ".", "."]
,   [".", "2", ".", "9", ".", ".", ".", ".", "."]
,   [".", ".", "4", ".", ".", ".", ".", ".", "."]

]

console.log(validateSudokuBoard(board3));