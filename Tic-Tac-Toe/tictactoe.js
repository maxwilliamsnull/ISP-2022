const boxes = document.querySelectorAll('.box');
const text = document.querySelector('#heading');
const result = document.querySelector('#strategy');
const resetButton = document.querySelector('#restart');

const spaces = []; //Initialize array for the boxes in the grid
const o = 'O';
const x = 'X';
let currentPlayer = o;

const generateBoxes = () => {
  /** 
  var container = document.getElementById("board");
  for(let i = 0; i < 9; i++){
    var box = document.createElement("box");
    box.id = i;
    container.appendChild(box);
  }**/

  console.log("Document Loaded");
}

const drawGrid = () => {
  boxes.forEach((box, i) => {
    let style = '';
    //On top
    if (i < 3) {
      style += 'border-bottom: 3px solid var(--text);';
    }
    //On left
    if (i % 3 === 0) {
      style += 'border-right: 3px solid var(--text);';
    }
    //On right
    if (i % 3 === 2) {
      style += 'border-left: 3px solid var(--text);';
    }
    //On botton
    if (i > 5) {
      style += 'border-top: 3px solid var(--text);';
    }
    box.style = style;
    //Add functionality when box is clicked
    box.addEventListener('click', boxClicked);
  });
};

const boxClicked = (e) => {
  const id = e.target.id;
  console.log(e);
  if (!spaces[id]) {
    console.log(spaces[id]);
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerWon()) {
      text.innerText = `${currentPlayer} has won!`;
      restart();
      return;
    }

    if (playerDraw()) {
      return;
    }
    if(currentPlayer === o){
        currentPlayer = x;
    } else {
        currentPlayer = o;
    }
  }
};

const playerWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      result.innerText = `${currentPlayer} wins up to top`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      result.innerText = `${currentPlayer} wins on the left`;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      result.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      result.innerText = `${currentPlayer} wins on the right`;
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      result.innerText = `${currentPlayer} wins on the bottom`;
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      result.innerText = `${currentPlayer} wins vertically on middle`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      result.innerText = `${currentPlayer} wins horizontally on the middle`;
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      result.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
};

const playerDraw = () => {
  let numBlanks = 0;
  console.log(spaces.length + ": player draw");
  spaces.forEach((space, i) => {
      //If space is empty
    if (spaces[i] !== null){
        numBlanks++;
    }
  });
  //If all spaces are empty
  if (numBlanks === 9) {
    text.innerText = `Draw`;
    restart();
  }

};

const restart = () => {

    //Timeout 
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = '';
    });
    text.innerText = `Play`;
    result.innerText = ``;
  }, 1000);
};

resetButton.addEventListener('click', restart);
restart();
drawGrid();