const boxes = document.querySelectorAll(".butt");
let turn = true;
// Winning patterns:
const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7,8],
];

// Box filling with X and O values:
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(box.innerHTML==""){
            if (turn) {
                box.innerHTML = "X";
                turn = false;
            } else {
                box.innerHTML = "O";
                turn = true;
            }
            // box.disabled=true;
            if(checkWinner()){
                document.getElementById("msg").innerHTML = "Winner is "+boxes[pattern[0]].innerHTML;
                boxdisabled();
            }
            else if(draw()){
                document.getElementById("msg").innerHTML = "Match Draw";
                
            }
        }
    });
});

// Checking winner:
const checkWinner = () => {
    for(pattern of winningPatterns){
        // console.log(pattern);
        if(boxes[pattern[0]].innerHTML!="" && boxes[pattern[0]].innerHTML==boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML==boxes[pattern[2]].innerHTML  ){
            // console.log("Winner is "+boxes[pattern[0]].innerHTML);
            // alert('winner is'+boxes[pattern[0]].innerHTML);
            // document.getElementById("msg").innerHTML = "Winner is "+boxes[pattern[0]].innerHTML;
            highlightWinnerCells(pattern);
            
            return true;
        }
    }
    return false;
}

function highlightWinnerCells(cellsToHighlight) {
    cellsToHighlight.forEach(index => boxes[index].style.backgroundColor = '#9eff9e');
}

//reset function
function reset(){
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.backgroundColor = '';
    });
    document.getElementById("msg").innerHTML = "";
    boxenable();
}
function draw(){
    let count=0;
    boxes.forEach(box => {
        if(box.innerHTML!=""){
            count++;
        }
    });
    if(count==9){
        return true;
    }

}
//disabling boxes after winning:
function boxdisabled(){
    boxes.forEach(box => {
        box.disabled=true;
    });
}

function boxenable(){
    boxes.forEach(box => {
        box.disabled=false;
    });
}