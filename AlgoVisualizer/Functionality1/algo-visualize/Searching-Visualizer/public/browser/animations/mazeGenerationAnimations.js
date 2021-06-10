/*ALL THESE WORKS ARE DONE BY 

ANKITA SIKDER

STUDENT OF BTECH, IN UEMK

CONTACT NO.: 8583939774

EMAIL ID: ankita.sikder14@gmail.com
*/function mazeGenerationAnimations(board) {
  let nodes = board.wallsToAnimate.slice(0);
  let speed = board.speed === "fast" ?
    5 : board.speed === "average" ?
      25 : 75;
  function timeout(index) {
    setTimeout(function () {
        if (index === nodes.length){
          board.wallsToAnimate = [];
          board.toggleButtons();
          return;
        }
        nodes[index].className = board.nodes[nodes[index].id].weight === 15 ? "unvisited weight" : "wall";
        timeout(index + 1);
    }, speed);
  }

  timeout(0);
};

module.exports = mazeGenerationAnimations;


