import './App.css'
import {useState} from "react";
import confetti from "canvas-confetti"
import {Square} from "./components/Square.jsx";
import {TURNS} from "./constants.js";
import {checkWinnerFrom, checkEndGame} from "./logic/board.js";
import {WinnerModal} from "./components/WinnerModal.jsx"
import {saveGameToStorage, resetGameStorage} from "./logic/storage/index.js";

export default function App() {
    //Los useState siempre tienen que estar en el cuerpo de la función, no en un if, un while, etc.
    const [board, setBoard] = useState(() => {
        const boardStorage = localStorage.getItem("board") //Esto está aquí para que lea del localStorage solo una vez
        return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null)
    })
    const [turn, setTurn] = useState(() => {
        const turnStorage = localStorage.getItem("turn")
        return turnStorage ?? TURNS.x
    })
    const [winner, setWinner] = useState(null)


//Nunca hay que modificar las props ni el estado. Siempre hay que hacer una copia con rest o spread operators.
    const updateBoard = (index) => {

        if (board[index] || winner) return
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
        setTurn(newTurn)

        saveGameToStorage({board: newBoard, turn: newTurn})

        const newWinner = checkWinnerFrom(newBoard) //La actualización de los estados es asíncrona
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.x)
        setWinner(null)
        resetGameStorage()
    }

    return (<main className={"board"}>
        <h1>Tic-Tac-Toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className={"game"}>
            {board.map((square, index) => {
                return (<Square key={index}
                                index={index}
                                updateBoard={updateBoard}>
                    {square}
                </Square>)
            })}
        </section>
        <section className={"turn"}>
            <Square isSelected={turn === TURNS.x}>
                {TURNS.x}
            </Square>
            <Square isSelected={turn === TURNS.o}>
                {TURNS.o}
            </Square>
        </section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>)
}

