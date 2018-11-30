let canvasX = 800
let canvasY = 600
let boardSize = 10
let board = []
let squareSize = 30
let margin = 10
let gapLimit = 5
let gapSize = 10

function setup() {
    createCanvas(canvasX, canvasY)
    board = createBoard()
    console.log("asd", board.length)
}

function draw() {
    background(200)
    
    let gapX = 0
    for (let i = 0; i < board.length; i++) {
        let inner = board[i]
        let gapY = 0

        if(i > 0 && i%gapLimit === 0){
            gapX += gapSize 
        }

        for (let j = 0; j < inner.length; j++) {

            if(j > 0 && j%gapLimit === 0){
                gapY += gapSize 
            }

            x =  i*squareSize + margin + gapX
            y =  j*squareSize + margin + gapY
            push()
            fill(240)
            stroke(210)
            rect(x, y, squareSize, squareSize)
            pop()
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