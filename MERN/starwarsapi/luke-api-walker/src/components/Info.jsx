import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const Info = () => {
    const { category, id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(()=>{
    axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            console.log(response)
            setDetails(response.data)
        })  
        .catch(err=>{
            console.log(err)
            setDetails({error: "These aren't the droids you're looking for"})
        })

    },[category, id])

    return details.error ? (
        <div>
        <h1>{details.error}</h1>
        <img src="https://knowyourmeme.com/memes/these-are-not-the-droids-you-are-looking-for"/>
        </div>
        ) : (

        <div>
            {
                category == "people"?
                <div>
                <h1>{details.name}</h1>
                <h5><b>Height:</b> {details.height} cm</h5>
                <h5><b>Mass:</b> {details.mass} kg</h5>
                <h5><b>Hair Color:</b> {details.hair_color}</h5>
                <h5><b>Skin Color:</b> {details.skin_color}</h5>
                
                </div> : category == "planets"?

                <div>
                <h1>{details.name}</h1>
                <h5><b>Climate:</b> {details.climate}</h5>
                <h5><b>Terrain:</b> {details.terrain}</h5>
                <h5><b>Surface Water:</b> {details.surface_water}</h5>
                <h5><b>Population:</b> {details.population}</h5>
                
                </div> : category == "films"?

                <div>
                <h1>{details.title}</h1>
                <h5><b>Director:</b> {details.director}</h5>
                <h5><b>Producer:</b> {details.producer}</h5>
                <h5><b>Release Date:</b> {details.release_date}</h5>

                </div> : null

            }
        </div>
    )
};

export default Info;