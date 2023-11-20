import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export default function App() {
    /*
    Diferencia entre componente y elemento:
        - Un componente es una factoría de elementos. Es una función que al ejecutarla te devuelve un elemento.
        - El elemento es lo que renderiza React.
     */

    const users = [
        {
            userName: 'Acho_yo',
            name: 'Juan Valera Reales',
            isFollowing: true
        },
        {
            userName: 'JesusValera96',
            name: 'Jesús Valera Reales',
            isFollowing: false
        },
        {
            userName: 'Chemaclass',
            name: 'José María Valera Reales',
            isFollowing: false
        },


    ]

    return (
        <section className={"App"}>
            {
                users.map(({userName, name, isFollowing}) => (
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}