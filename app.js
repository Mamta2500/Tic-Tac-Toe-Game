let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX,playerO
let count=0;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame =()=>{
turnO=true;
count=0;
enableboxes();
msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
        box.innerText="O";
        box.style.color="blue";
        turnO=false;
}else{
    box.innerText="X";
    box.style.color="orange";

    turnO=true;
}
box.disabled=true;
count++;
let iswinner=checkWinner();
if(count===9 && !iswinner){
    gamedraw();
}
    });

});
const gamedraw =()=>{
    msg.innerText=`Game was a Draw !`;
    msgcontainer.classList.remove("hide");
    disablboxes();
};
const disablboxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    };
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablboxes();

};
const checkWinner=()=>{
    for(let pattern of winPatterns){
       
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="" ){
            if(pos1val===pos2val && pos2val===pos3val){
                // console.log("winner",pos1val);
                showWinner(pos1val);
                return true;
            }
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

