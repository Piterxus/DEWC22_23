function getSpeciesSprite(id){
    const sprite=fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>response.json())
    .then(data=>data.sprites.front_default)
    return sprite;
  }

  function getPokemonData(){
    const allData=fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response=>response.json())
    .then(data=>data)
    return allData;
  }
  // export default getSpeciesSprite;

  export {getSpeciesSprite,getPokemonData}