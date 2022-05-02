const WIDTH = 7;
const HEIGHT = 6;

const RED_VALUE = 0;
const BLACK_VALUE = 1;
var turn_number = 0;


const generateArray = () => {
    var grid = new Array(HEIGHT);

    for(let i = 0; i < grid.length; i++){
        grid[i] = new Array(WIDTH);
    }
    
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            grid[y][x] = 7 * y + x;
        }
    }

    return grid;
}

const grid = generateArray();

console.log(grid);

//Create 2D Array same size as connect 4 grid


function columnIsFull(columnNumber){
    return grid[0][columnNumber] == 0 || grid[0][columnNumber] == 1;
}

function gridIsFull(){
    for(let col = 0; col < grid.length; col++){
        if(!columnIsFull){
            return false;
        }
    }

    return true;
}

function dropPiece(pieceValue, col){
    for(let row = HEIGHT - 1; row >= 0; row--){//Start at last row, loop up
        if(grid[row][col] === ""){
            grid[row][col] = pieceValue;
            return true; //Piece succesfully dropped
        }
    }

    return false; //The column was full - check before hand
}

function checkDown(x, y){
    if(y > HEIGHT - 4){ //If the starting position is too low
        return false;
    }

    var startingPiece = grid[x][y];

    for(let offset = 1; offset < 4; offset++){
        if(grid[x + offset][y] !== startingPiece){
            return false;
        }
    }

    return true;
}