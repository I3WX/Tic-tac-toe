const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const box6 = document.getElementById("box6")
const box7 = document.getElementById("box7")
const box8 = document.getElementById("box8")
const box9 = document.getElementById("box9")
const arrayBox = [box1 , box2 ,box3 ,box4 ,box5 , box6 ,box7 ,box8 , box9]
const symbol = document.getElementById("symbol")
const turn = document.getElementById("turn")
const boxContainer = document.querySelector(".boxContainer")
const Wins = document.querySelector(".wins")
let XOSymbol = "X"
let Player1Win = 0
let Player2Win = 0


boxContainer.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('box')|| e.target.closest('.box')){
        const box = e.target.classList.contains('box') ? e.target : e.target.closest('.box');
        if(box.innerText == ""){
            box.innerText = XOSymbol
            symbol.innerHTML = XOSymbol
            XOSymbol = XOSymbol == "X" ? "O" : "X"
            turn.innerText = turn.innerText == "Player 1 turn" ? "Player 2 turn" : "Player 1 turn"
        }
        winnerCheck()
    }

})

function winnerCheck() {
    const winningCombinations = [
        [box1, box2, box3],
        [box4, box5, box6],
        [box7, box8, box9],
        [box1, box4, box7],
        [box2, box5, box8],
        [box3, box6, box9],
        [box1, box5, box9],
        [box3, box5, box7]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (a.innerText && a.innerText === b.innerText && a.innerText === c.innerText) {
            winUpdate(a.innerText);
            return;
        }
    }
}

function winUpdate(box){
    console.log("ji frm onupdate")
    box == "X" ? Player1Win++  : Player2Win ++
    box == "X" ? alert("X 1 Wins")  : alert("O 2 Wins")
    Wins.innerHTML = `
        <p>player 1 wins ${Player1Win}</p>
        <p>player 2 wins ${Player2Win}</p>
        `
    resetGame()
}

function resetGame(){
    arrayBox.forEach(box => {
        box.innerText = ""
    });
}