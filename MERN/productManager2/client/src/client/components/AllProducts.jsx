import React, {useState, useEffect} from 'react';
import {
    Link
  } from "react-router-dom";
import axios from 'axios';

const AllProducts = () => {

    let [product, setProducts] = useState([])

    useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
        .then(response=>{
            setProducts(response.data.results);
        })
        .catch()

    },[])

    return (
        <div>
            <h3>ALL Products</h3>
            {
                product.map((product, i)=>{
                    return(
                        <div key={product._id} className='card'>
                            <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
                            <h4>{product.price}</h4>
                            <h4>{product.description}</h4>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;