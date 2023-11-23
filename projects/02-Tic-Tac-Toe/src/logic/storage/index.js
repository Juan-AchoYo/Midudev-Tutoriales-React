import {TURNS} from "../../constants.js";

export const saveGameToStorage = ({board, turn}) => {
    window.localStorage.setItem("board", JSON.stringify(board))//Esto es porque es un array
    window.localStorage.setItem("turn", turn)
}

export const resetGameStorage = () => {
    localStorage.removeItem("board")
    localStorage.removeItem("turn")
}