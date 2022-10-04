import React, {useState, useEffect} from 'react';
import {
    Link
  } from "react-router-dom";
import axios from 'axios';


const AllProducts = (props) => {

    let [product, setProducts] = useState([])
    let [ninjaDeleted, setNinjaDeleted] = useState(false)

    useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
        .then(response=>{
            setProducts(response.data.results);
        })
        .catch()

    },[ninjaDeleted, props.formSubmitted])

    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
            setNinjaDeleted(!ninjaDeleted)
        })
        .catch(err=>console.log(err))
    }

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
                            <Link to={`/products/edit/${product._id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger'>Delete {product.title}</button>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;