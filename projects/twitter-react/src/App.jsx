import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export default function App() {
    /*
    Diferencia entre componente y elemento:
        - Un componente es una factoría de elementos. Es una función que al ejecutarla te devuelve un elemento.
        - El elemento es lo que renderiza React.
     */

    return (
        <section className={"App"}>
            <TwitterFollowCard userName={"Acho_yo"} name={"Juan Valera Reales"}
                               isFollowing/>
            <TwitterFollowCard userName={"Chemaclass"} name={"José María Valera Reales"}
                               isFollowing={false}/>
            <TwitterFollowCard userName={"JesusValera96"} name={"Jesús Valera Reales"}
                               isFollowing/>
        </section>
    )
}