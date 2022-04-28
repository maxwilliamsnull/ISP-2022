const Grid_Size = 3;

const TopLeft = Symbol("top left");
const TopRight = Symbol("top right");

var grid = [[1,0,1],[1,1,0],[0,1,1]];
var row = 0;

for(let i = 0; i < 3; i++){
    console.log(grid[i]);
}

function checkRow(grid, row){
    var first = grid[row][0];

    for(let col = 1; col < Grid_Size; col++){
        if(grid[row][col] != first){
            return false;
        }
    }

    return true;
}

function checkColumn(grid, col){
    var first = grid[0][col];

    for(let row = 1; row < Grid_Size; row++){
        if(grid[row][col] != first){
            return false;
        }
    }

    return true;
}

function checkDiagonal(grid, start){
    switch (start){
        case TopLeft:
            var first = grid[0][0];
            for(let row = 1; row < Grid_Size; row++){
                var col = row;
                if(grid[row][col] != first){
                    return false;
                }
            }
            return true;
        break;
        case TopRight:
            var first = grid[0][2];
            for(let row = 1; row < Grid_Size; row++){
                var col = 2-row;
                if(grid[row][col] != first){
                    return false;
                }
            }
            return true;
        break;
        default:
            return false; 
    }
}

function checkGrid(grid){
    for(let row = 0; row < Grid_Size; row++){
        if(checkRow(grid, row)){
            return true;
        }
    }

    for(let col = 0; col < Grid_Size; col++){
        if(checkColumn(grid, col)){
            return true;
        }
    }

    if(checkDiagonal(grid, TopLeft)){
        return true;
    }

    if(checkDiagonal(grid, TopRight)){
        return true;
    }

    return false;
}

console.log(checkGrid(grid));