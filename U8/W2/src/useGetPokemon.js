import getSpeciesSprite from "./pokeImg";

import { useEffect, useState } from "react"

function useGetPokemon(id) {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    // const { id } = props


    useEffect(
        () => {
            async function test() {
                //   console.log("Data:", data)
                //  console.log(await pokeImage(id))
                setLoading(true)
                setData(await getSpeciesSprite(id))
                setLoading(false)
                //  console.log("Postdata:",data)
            }
            test()
        }, [id]
    )

    return { data, loading }
}

export default useGetPokemon;