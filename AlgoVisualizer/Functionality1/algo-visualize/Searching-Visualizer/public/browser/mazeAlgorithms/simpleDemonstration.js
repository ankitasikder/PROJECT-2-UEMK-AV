function simpleDemonstration(board) {
  /*ALL THESE WORKS ARE DONE BY 

ANKITA SIKDER

STUDENT OF BTECH, IN UEMK

CONTACT NO.: 8583939774

EMAIL ID: ankita.sikder14@gmail.com
*/
  let currentIdY = board.width - 10;
  for (let counter = 0; counter < 7; counter++) {
    let currentIdXOne = Math.floor(board.height / 2) - counter;
    let currentIdXTwo = Math.floor(board.height / 2) + counter;
    let currentIdOne = `${currentIdXOne}-${currentIdY}`;
    let currentIdTwo = `${currentIdXTwo}-${currentIdY}`;
    let currentElementOne = document.getElementById(currentIdOne);
    let currentElementTwo = document.getElementById(currentIdTwo);
    board.wallsToAnimate.push(currentElementOne);
    board.wallsToAnimate.push(currentElementTwo);
    let currentNodeOne = board.nodes[currentIdOne];
    let currentNodeTwo = board.nodes[currentIdTwo];
    currentNodeOne.status = "wall";
    currentNodeOne.weight = 0;
    currentNodeTwo.status = "wall";
    currentNodeTwo.weight = 0;
  }
}

module.exports = simpleDemonstration;

