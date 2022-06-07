let board = [];
let table = document.createElement("table");
document.body.appendChild(table);
for(let i = 0; i < 9; i+=3) {
    for(let j = 0; j < 3; j++) {
        board[i+j] = "";
    }
}
let playerOne = "o";
let playerTwo = "x";
let currentPlayer = Math.floor(Math.random() * 2) == 0 ? playerOne : playerTwo;
let displayCurPlayer = document.createElement("h2");
displayCurPlayer.innerText = "Current Player: " + currentPlayer;
document.body.appendChild(displayCurPlayer);
function changeValue(coor) {
    displayCurPlayer.innerText = "";
    board[coor] = board[coor] == "" ? currentPlayer : board[coor];
    if(isWinner(currentPlayer, coor)){
        displayCurPlayer.innerText = `Player ${currentPlayer} wins!`;
    } else {
        currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
        displayCurPlayer.innerText = "Current Player: " + currentPlayer;
    }
    drawBoard();
}

let winConditionOfEachPosisition = [
    [[1, 2], [3, 6], [4, 8]],           
    [[0, 2], [4, 7]],                   
    [[0, 1], [4, 6], [5, 8]],           
    [[0, 6], [4, 5]],                   
    [[1, 7], [3, 5], [0, 8], [2, 6]],   
    [[2, 8], [3, 4]],                   
    [[0, 3], [7, 8], [2, 4]],           
    [[1, 4], [6, 8]],                   
    [[2, 5], [6, 7], [0, 4]]            
];

function isWinner(player, lastMove){
    let result;
    for(let i = 0; i < winConditionOfEachPosisition[lastMove].length; i++) {
        let posWinCon = winConditionOfEachPosisition[lastMove][i];
        if(player == board[posWinCon[0]] && player == board[posWinCon[1]]) result = true;
        else result = false;
    }
    return result;
}

function drawBoard(){
    table.innerText = "";
    for(let i = 0; i < 9; i+=3) {
        let row = document.createElement("tr");
        for(let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("onclick", `changeValue(${i+j})`);
            cell.innerText = board[i+j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
drawBoard();