import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, userName, initialIsFollowing}) {
    /*
    Nunca hay que modificar la prop. Esto no se debe hacer: userName = `@{userName}
    Sí se podría metiendo el valor en una constante: const userName = `@{userName}

    Se puede utilizar la prop "children" la cual te da todos lo que se encuentre envuelto
    por ese componente.

     */
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (<article className={"tw-followCard"}>
            <header className={"tw-followCard-header"}>
                <img alt={"Imagen de twitter"} src={`https://unavatar.io/twitter/${userName}`}
                     className={"tw-followCard-avatar"}/>
                <div className={"tw-followCard-info"}>
                    <strong>{children}</strong>
                    <span className={"tw-followCard-infoUserName"}>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className={'tw-followCard-text'}> {text}</span>
                    <span className={'tw-followCard-stopFollow'}>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}