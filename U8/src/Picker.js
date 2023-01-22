import { useState } from "react"

function Picker(props) {
    const { cantidad } = props
    const ranges = []
    const [title, setTitle] = useState('')

    for (let i = 0; i < cantidad; i++) {
        ranges.push(i)
    }
    const inputsRanges = ranges.map(
        (num) => <div><input id={`range${num}`} type="range"></input><br /> </div>
    )


   


    return (
        <>
            <div>
                <h1>PICKER</h1>
                {/* {inputsRanges} */}
                <label>Hue:</label> <input  onChange={event => setTitle(document.getElementById("resultHue").innerHTML=document.getElementById('range1').value)} id="range1" min="0" max="360" type="range"></input><br />
                <label>Saturation:</label>  <input id="range2" min="0" max="10" type="range" onChange={event => setTitle(document.getElementById("resultSaturation").innerHTML=document.getElementById('range2').value)}></input><br />
                <label>Steps:</label>    <input id="range3" min="5" max="100" type="range" onChange={event => setTitle(document.getElementById("resultSteps").innerHTML=document.getElementById('range3').value)}></input><br />
                <p>Hue: <span id="resultHue"></span></p>
                <p>Saturation: <span id="resultSaturation"></span></p>
                <p>Steps: <span id="resultSteps"></span></p>
            </div>

        </>

    )
}

export default Picker