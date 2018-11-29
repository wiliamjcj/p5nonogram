let canvasX = 800
let canvasY = 600
let boardSize = 5
let board = []
let squareSize = 30
let margin = 30
let squareGapLimit = 100
let squareGapSize = 10

function setup() {
    createCanvas(canvasX, canvasY)
    board = createBoard()
}

function draw() {
    background(230)
    fill(20)
    for (let i = 0; i < board.length; i++) {
        let inner = board[i]
        for (let j = 0; j < inner.length; j++) {
            let x,y,w,h = 0
            
            if(i%squareGapLimit === 0){
                x = i*squareSize + margin + squareGapSize
                w = squareSize + squareGapSize
            }else{
                x = i*squareSize + margin
                w = squareSize
            }
            
            if(j%squareGapLimit === 0){
                y = j*squareSize + margin + squareGapSize
                h = squareSize + squareGapSize
            }else{
                y = j*squareSize + margin
                h = squareSize
            }
            console.log(i%squareGapLimit)            
            rect(x, y, w, h)
        }   
    }
}

function createBoard() {
    let items = []
    for (let i = 0; i < boardSize; i++) {
        items[i] = Array(boardSize).fill(0)
    }
    return items;
}