function Gradient(props) {
    const { hue, saturation, number } = props
    let numbers = []
    let interval = 100 / number
    let intervals = 0

    for (let i = 0; i < number; i++) {
        numbers.push(intervals)
        intervals += interval
       
        }

   
    const listItems = numbers.map((num) =>
        <div key={num} className='square' style={{ backgroundColor: `hsl(${hue},${saturation}%,${num}%)` }}></div>
    );

    return (
        <>
          <div className="squares">  {listItems}</div>
        </>
        
        )
}

export default Gradient