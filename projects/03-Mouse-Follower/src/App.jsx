import {useEffect, useState} from "react";

function App() {
    const [enabled, setEnabled] = useState(false)
    useEffect(() => {
        console.log("Efecto")
    }, [])

    const handleClickEnabled = () => {
        setEnabled(!enabled)
    }

    return (
        <>
            <h3>Proyecto 3</h3>
            <button onClick={handleClickEnabled}>{enabled ? "Desactivar " : "Activar "}seguir puntero</button>
        </>)
}

export default App