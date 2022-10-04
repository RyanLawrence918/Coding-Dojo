import React, {useState} from "react";
import axios from "axios";

const AxiosPokemon = ()=>{

    let [pokemon, setPokemon] = useState([])

    const getData = ()=>{

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000")
        .then(response=>{
            console.log("response from api is ->", response);
            setPokemon(response.data.results);
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

export default AxiosPokemon;