
var  playerRed = "R"
var playerYellow ="Y"
var currPlayer = playerRed

var gameOver = false
var board

var rows = 6
var columns = 7

window.onload = function(){
    setGame()
}
function setGame() {
    board = []
    currColumns = [5, 5, 5, 5, 5, 5, 5]

    for (let r =0; r < rows; r++) {
        let row = []
        for (let c=0; c < columns; c++){
            row.push(' ');

            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString()
            tile.classList.add("tile")
            tile.addEventListener("click", setpiece)
            document.getElementById("board").append(tile)
        }
        board.push(row)
    }
}
function setpiece() {
    if (gameOver){
        return
    }
    let coords = this.id.split("-")
    let r = parseInt(coords[0])
    let c = parseInt(coords[1])

    r = currColumns[c]
    if (r < 0) {
        return
    }

    board[r][c] = currPlayer
    let tile = document.getElementById(r.toString() + "-" + c.toString())
    if(currPlayer == playerRed){
        tile.classList.add("red-piece")
        currPlayer = playerYellow
    }
    else{
        tile.classList.add("yellow-piece")
        currPlayer = playerRed
    }

    r -= 1
    currColumns[c] = r

    checkwinner()



}
function checkwinner(){
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++){
            if(board[r][c] != ' '){
                if (board[r][c] == board[r][c+1] && board[r][c] == board[r][c+2] && board[r][c] == board[r][c+3]) {
                    setwinner(r, c)
                    return
                }
            }
        }
    }
}

function setwinner(r, c){
    let winner = document.getElementById("winner")
    if(board[r][c] == playerRed) {
        winner.innerText = "Red wins"
    } else{
        winner.innerText = "Yellow wins"
    }
}