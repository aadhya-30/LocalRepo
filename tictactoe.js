let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let isX = true;
let count = 0;
/* horizontal - 0,1,2  3,4,5  6,7,8
vertical - 0,3,6  1,4,7,  2,5,8
diagonal 0,4,8  2,4,6
*/
const Winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    isX = true;
     count = 0;
    enableBtns();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(isX){
            box.innerText = "X";
            isX = false;
        }
        else{
            box.innerText = "O";
            isX= true;
        }
        box.disabled = true;
        count++;
       let Winner =  checkWinner();

        if(count === 9 && !Winner){
            draw();
        }
    });

});

const draw = () => {
    
    msg.innerText = `It is a tie`;
    msgContainer.classList.remove("hide");
    disableBtns();

}

const disableBtns = () =>{
for(box of boxes){
    box.disabled = true;
}
}

const enableBtns = () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `<i><b>Congratulations, Winner is ${winner}</b></i>`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

checkWinner = () => {
    for(pattern of Winner){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos2);
                showWinner(pos1);

            }
        }

    }

}

// reset.addEventListener("click",() => {
//     console.log("Reset button was clicked");
//     boxes.forEach((box) => {
//         box.innerText = "";
//         box.disabled = false;
    
//     });
//     isX = true;
    
// });

newgamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


