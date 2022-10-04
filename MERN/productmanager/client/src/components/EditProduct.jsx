import React, {useState,useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const EditProduct = () => {

    const {id} = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response)
                    setDetails(response.data.results);
            })
            .catch(err=>console.log(err))
    }, [])

    const changeHandler = (e)=>{
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, details)
            .then(response=>{
                console.log("Response", response)
                navigate("/")
            })
            .catch(err=>console.log(err))
                
    }


    return (
        <div>
            <h3>Edit "{details._id}"</h3>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label htmlFor=''>Title:</label>
                    <input type="text" name="title" className="form-control" value={details.title} onChange={changeHandler}/>
                    

                </div>
                <div className='form-group'>
                    <label htmlFor=''>Price:</label>
                    <input type="number" name="price" className="form-control" value={details.price} onChange={changeHandler}/>

                    
                </div>
                <div className='form-group'>
                    <label htmlFor=''>Description:</label>
                    <input type="text" name="description" className="form-control" value={details.description} onChange={changeHandler}/>


                </div>
                <input type="submit" value="Update" className='btn btn-success'/>
            </form>
        </div>
    );
};

export default EditProduct;