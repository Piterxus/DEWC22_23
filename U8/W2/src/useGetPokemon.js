import getSpeciesSprite from "./pokeImg";
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

export default useGetPokemon;