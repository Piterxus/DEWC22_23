import { useState } from "react"

function InputPicker(props) {
    
    const { title, min = 1, max = 100 } = props
    return (
        <>
            <label>{title}</label><input onChange={e => setHue(e.target.value)} min={min} max={max} type="range"></input><br />
        </>
    )

}

function Picker() {

    const [hue, setHue] = useState('')
    const [sat, setSat] = useState('')
    const [step, setSteps] = useState('')

    return (
        <>
            <div>
                <h1>PICKER</h1>
                {/* <InputPicker title="Hue" onChange={e => setHue(e.target.value)} min={0} max={360}></InputPicker> Revisar por qué no funciona evento */}
                <label>Hue:</label><input onChange={e => setHue(e.target.value)} min="0" max="360" type="range"></input><br />
                <label>Saturation:</label><input onChange={e => setSat(e.target.value)} min="0" max="10" type="range" ></input><br />
                <label>Steps:</label><input onChange={e => setSteps(e.target.value)} min="5" max="100" type="range" ></input><br />
                <p>Hue:{hue}</p>
                <p>Saturation:{sat}</p>
                <p>Steps:{step}</p>
            </div>

        </>

    )
}

export default Picker