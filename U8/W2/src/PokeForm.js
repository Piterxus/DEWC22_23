import {useGetPokemonAllData} from "./useGetPokemon";

const DEFAULT_LANGUAGE = '7' // Español

function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter(pokemon => pokemon.local_language_id === language)
}

// const listItems = numbers.map((num) =>
// <div key={num} className='square' style={{ backgroundColor: `hsl(${hue},${saturation}%,${num}%)` }}></div>
// );



function PokeForm(props) {
  const dataListValues = useGetPokemonAllData().results
const dataListValuesMap= dataListValues.map(
  (values)=> <option value={values}></option>
)
  
console.log('->',useGetPokemonAllData().results)
  return (
    <div>
      <h2>PokeForm</h2>
      <form>
        <label>
          Nombre del pokèmon:
          <input type="text" name="name" list="pokemons"/>
        </label>
        <datalist id="pokemons">
          {dataListValuesMap}
        </datalist>
        <label>
          Lenguaje
          <select>
            <option value="7">Español</option>
            <option value="5">Francés</option>
            <option value="6">Alemán</option>
          </select>
        </label>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default PokeForm
