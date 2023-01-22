function Gradient(props) {
    const { hue, saturation, number } = props
    let numbers = []
    let intervalos = 100 / number
    let interval = 0

    for (let i = 0; i < number; i++) {
        numbers.push(interval)
        interval += intervalos


        console.log(interval)


    }
    // numbers=numbers.reverse()
    console.log(props)
    const listItems = numbers.map((num) =>
        <div key={num} className='grade' style={{ backgroundColor: `hsl(${hue},${saturation}%,${num}%)` }}></div>
    );

    return (
        <>



            {listItems}


        </>

    )


}

export default Gradient