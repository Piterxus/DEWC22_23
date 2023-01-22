import Gradient from './Gradient'
import Picker from './Picker'
import './styles/app.css'



function App() {
  return (
  <>
  <Gradient hue={23} saturation={100} number={5}/>
  <Picker></Picker>
  </>
 )
}

export default App