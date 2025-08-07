let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

// if turnO is true then it'll print O, otherwise print X.
let turnO = true;

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

// function that run for clicking
function boxclick(event) {
    console.log("box was clicked");
    if(turnO === true) {
        event.target.innerText = "O";
        turnO = false;
    }
    else {
        event.target.innerText = "X";
        turnO = true;
    }
}

// perform the boxclick function for every box
boxes.forEach((box) => {
    box.addEventListener("click", boxclick);
});