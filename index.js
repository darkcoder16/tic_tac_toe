let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector(".msg");

let turn = true; // player X and player O


const winner = [
    [0 , 1 ,2],
    [3 ,4 ,5],
    [6,7,8],
    [0 ,3 , 6],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [0 ,4, 8],
    [6 ,4 ,2],
]

const ans = [];

boxes.forEach((Box) => {
    Box.addEventListener("click" , () => {
        console.log("box clicked");
        if (turn) {
            Box.innerText ="X";
            turn = false;
            Box.style.color = "black";
        }
        else {
            Box.innerText = "O";
            turn = true;
            Box.style.color = "white";
    
        }
        Box.disabled = true;
        checkWinner();
    });
});


    

function checkWinner() {
    for(pattern of winner) {
        // console.log(pattern[0] , pattern[1] , pattern[2]);
    //     console.log(
    //         boxes[pattern[0]].innerText, 
    //         boxes[pattern[1]].innerText, 
    //         boxes[pattern[2]].innerText);
    // }
    let pos1 =  boxes[pattern[0]].innerText;
    let pos2 =  boxes[pattern[1]].innerText;
    let pos3 =  boxes[pattern[2]].innerText;


if(pos1 != "" && pos2 != "" && pos3 != "") {
    if(pos1 === pos2 && pos2 === pos3 && pos3 ==pos1){
        console.log("winner ->" , pos3);
        GameEnd();
        showwinner(pos3);
    }
    // else 
    // {
    // msg.innerHTML = `<b> GAME DRAW </b>`;
    // newgame.classList.remove("hide");
    // msg.classList.remove("hide");
    // GameEnd();
    // }

}
}


}

const showwinner = (winner) => {
    msg.innerHTML = `Game Ended ! <br> <b> player ${winner} won</b> `;
}


const GameEnd = () => {
   for(box of boxes) {
    box.disabled = true;
   }

   newgame.classList.remove("hide");
   msg.classList.remove("hide");
   
}

const reset = () =>  {
    turn = true;
    enableboxes();
    msg.classList.add("hide");
    newgame.classList.add("hide");
}

const enableboxes = ()=> {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

resetbtn.addEventListener("click" , reset);
newgame.addEventListener("click" , reset);
