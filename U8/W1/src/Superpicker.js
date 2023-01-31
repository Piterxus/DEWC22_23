import { useState } from "react"
import Gradient from './Gradient'

function Superpicker() {

    const [hue, setHue] = useState('')
    const [sat, setSat] = useState('')
    const [step, setSteps] = useState('')

    return (
        <>
            <div>
                <h1>SUPERPICKER</h1>
                <p>Hasta que no estén definidos todos los valores no se obtiene el resultado:</p>

                <label>Hue:</label><input onChange={e => setHue(e.target.value)} min="0" max="360" type="range"></input><br />
                <label>Saturation:</label><input onChange={e => setSat(e.target.value)} min="0" max="10" type="range" ></input><br />
                <label>Steps:</label><input onChange={e => setSteps(e.target.value)} min="5" max="100" type="range" ></input><br />
                <p>Hue:{hue}</p>
                <p>Saturation:{sat}</p>
                <p>Steps:{step}</p>
               
            </div>
            <Gradient hue={hue} saturation={sat*10} number={step}/>

        </>

    )
}

export default Superpicker