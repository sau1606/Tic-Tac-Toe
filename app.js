let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg  = document.querySelector("#msg");

let turnO = true; //player X, player O

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enbledBoxes();
    msgContainer.classList.add("hide");
};


const disabledBoxes = () => {
    for(let box of boxes ){
        box.disabled = true;
    }
};

const enbledBoxes = () => {
    for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }
};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"; //player O
      turnO = false;
    } else {
      box.innerText = "X"; //player X
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});



const showWinner = (winner) => {
    msg.innerText = `Congratulation.. Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const showDraw = () => {
    msg.innerText = "Game Draw !!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


let count = 0;
/*const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
        
    }
    
};
};  */

/*const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
      
      if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  
    if (count == 9) {
      showDraw();
    } else {
      count++;
    }
  };*/
  
  const checkWinner = () => {
    let winner = null;
  
    // Check for win
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
        winner = pos1Val;
        break;
      }
    }
  
    // If there's a winner, show winner message
    if (winner !== null) {
      showWinner(winner);
      return;
    }
  
    // If all cells are filled but no winner, it's a draw
    if (count === 8) {
      showDraw();
      //return;
    }
  
    // If no winner and not a draw, continue the game
    count++;
  };
  


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);