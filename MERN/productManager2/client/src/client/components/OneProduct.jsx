import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useParams } from "react-router"

const OneProduct = () => {

    const {id} = useParams()

    
    const [details, setDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response)
                setDetails(response.data.results);
            })
            .catch(err=>console.log(err))
    }, [])


    return (
        <div>
            <h2>Milk</h2>
            <h4>Price: {details.price}</h4>
            <h6>Description: {details.description}</h6>
        </div>
    );
};


export default OneProduct;