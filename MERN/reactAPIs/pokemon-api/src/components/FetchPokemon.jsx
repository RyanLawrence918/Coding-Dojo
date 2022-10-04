import React, {useState} from "react";

const FetchPokemon = ()=>{

    let [pokemon, setPokemon] = useState([])

    const getData = ()=>{

    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
        .then(response=>{
            return response.json() // to parse the response as json
        })
        .then(response=>{
            console.log("response from api is ->", response);
            setPokemon(response.results);
        })
        .catch(error=>{
            console.log("something went wrong...", error)
        })
    }

    return (
        <div>
            <button onClick={getData}>Fetch Pokemon</button>
            {
                pokemon.map((pokemon, idx)=>{
                    return(
                        <div>
                            <li>{pokemon.name}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchPokemon;