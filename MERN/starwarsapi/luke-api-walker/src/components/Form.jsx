import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"


const Form = () => {
    let [category, setCategory] = useState("people");
    let [id, setId] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }


    return (
        <div>
            <form className='d-flex align-items-center justify-content-center gap-3' onSubmit={submitHandler}>
                <div className='form-group'>
                    <label>Search for:</label>
                    <select onChange={(e)=>setCategory(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                        <option value="starships">starships</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor=''>ID:</label>
                    <input type="number" onChange={(e)=>setId(e.target.value)}/>
                </div>
                <input type="submit" value="Search" className='btn btn-primary' />
            </form>
        </div>
    );
};

export default Form;