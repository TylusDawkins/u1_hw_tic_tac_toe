const board = document.querySelectorAll('.box')
let playerTurn = "X"
let winner = false

const winningConditions = [
    // horizontal win conditions
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical win conditions
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal win conditions 
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    winningConditions.forEach((condition,i) => {
        console.log()
        if(board[condition[0]].innerText !== "" && board[condition[0]].innerText === board[condition[1]].innerText && board[condition[1]].innerText === board[condition[2]].innerText){
            console.log('Win!')
            winner = true
        }
    })
}

const play = (e) => {
    if(winner === true || e.target.innerText != ""){
        return
    }
    e.target.innerText = playerTurn
    playerTurn = playerTurn === "X" ? "O" : "X" 
    checkWinner()
}

board.forEach((box) => {
    box.addEventListener('click', (e)=>{play(e)})
})

