import { getSpeciesSprite, getPokemonData } from "./pokeImg";
import { useEffect, useState } from "react"

function useGetPokemon(id) {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(
        () => {
            async function test() {

                setLoading(true)
                setData(await getSpeciesSprite(id))
                setLoading(false)

            }
            test()
        }, [id]
    )

    return { data, loading }
}

function useGetPokemonAllData() {
    const [allData, setData] = useState(getPokemonData)

    useEffect(
        () => {
            async function allData() {


                setData(await getPokemonData())


            }
            allData()
        }, []
    )

   return allData

}

export { useGetPokemon, useGetPokemonAllData };