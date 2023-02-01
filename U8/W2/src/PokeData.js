import {useGetPokemon} from "./useGetPokemon";
import Loading from './Loading'
import './styles/pokedata.css'
import './styles/loader.css'

function PokeData(props) {
  const { id } = props
  const { data, loading } = useGetPokemon(id)
  if (loading) {
    return (
      <>
        <Loading message={"Cargando..."}></Loading>
      </>
    )
  } else {
    return (
      <>
        <h2>PokeData</h2>
        <div className='pokedata'>

          <img alt="pokemon image" src={data} />

        </div>
      </>
    )
  }
}

export default PokeData
