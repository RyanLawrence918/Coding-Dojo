import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";

const OneProduct = () => {

    const {id} = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response)
                if(response.data.results){
                    setDetails(response.data.results);
                }else{
                    setDetails(true)
                }
            })
            .catch(err=>console.log(err))
    }, [])

    const deleteProduct = ()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
            navigate("/")
        })
        .catch()
    }

    return (
        <div>
            <h2>{details.title}</h2>
            <h4>Price: ${details.price}</h4>
            <h6>Description: {details.description}</h6>
            <button onClick={deleteProduct} className='btn btn-danger'>Delete {details.title}</button>
        </div>
    );
};


export default OneProduct;