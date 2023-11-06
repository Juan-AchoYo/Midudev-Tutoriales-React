export function TwitterFollowCard({ userName, name, isFollowing}) {
    /*
    Nunca hay que modificar la prop. Esto no se debe hacer: userName = `@{userName}
    Sí se podría metiendo el valor en una constante: const userName = `@{userName}

    Se puede utilizar la prop "children" la cual te da todos lo que se encuentre envuelto
    por ese componente.

     */
    return (<article className={"tw-followCard"}>
            <header className={"tw-followCard-header"}>
                <img alt={"Imagen de twitter"} src={`https://unavatar.io/twitter/${userName}`}
                     className={"tw-followCard-avatar"}/>
                <div className={"tw-followCard-info"}>
                    <strong>{name}</strong>
                    <span className={"tw-followCard-infoUserName"}>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={"tw-followCard-button"}>Seguir</button>
            </aside>
        </article>
    )
}