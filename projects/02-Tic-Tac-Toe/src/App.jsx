import './App.css'
import {useState} from "react";

const TURNS = {
    x: '×', o: 'o'
}
const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'selected' : '' }`
    console.log(className)
    return <div className={"square"}>
        {children}
    </div>
}

export default function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.x)
    return (<main className={"board"}>
        <h1>Tic-Tac-Toe</h1>
        <section className={"game"}>
            {board.map((_, index) => {
                return (<Square key={index} index={index}></Square>)
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
    </main>)
}

