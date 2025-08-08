let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-game-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// if turnO is true then it'll print O, otherwise print X.
let turnO = true;

// function that run for clicking
function boxclick(event) {
    console.log("box was clicked");
    if(turnO === true) {
        event.target.innerText = "O";
        event.target.style.backgroundColor = "pink";
        turnO = false;
    }
    else {
        event.target.innerText = "X";
        event.target.style.backgroundColor = "teal";
        turnO = true;
    }
    event.target.disabled = true;

    checkwinner();
}

// perform the boxclick function for every box
boxes.forEach((box) => {
    box.addEventListener("click", boxclick);
});

// now we use 2d array to save our winning patterns
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 6],
    [2, 4, 8],
    [3, 4, 5],
    [6, 7, 8]
];

// disable all the buttons after winning
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// function to show winner 
const showwinner = (winner) => {
    msgcontainer.classList.remove("hide");
    msg.innerText = `Congratulations!!, Winner ${winner}`;
} 

// function to check winner
const checkwinner = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // access the innertext of every position :-
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
        
        //store every position in an variable
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText;

        //check whose win
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                disableBoxes();
                showwinner(pos1val);
            }
        }
    } 
}

