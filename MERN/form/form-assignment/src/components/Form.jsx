import React, {useState} from "react";

const Form = ()=>{
let [name, SetName] = useState("");
let [last, SetLast] = useState("");
let [email, SetEmail] = useState("");
let [password, SetPassword] = useState("");
let [pwconfirm, SetPWConfirm] = useState("");

    return(
        <div>
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={(e)=>SetName(e.target.value)} type="text"/>
                    {name.length<2 ? <p className="text-danger">First Name must be at least 2 characters long</p> : ""}
                    
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={(e)=>SetLast(e.target.value)} type="text"/>
                    {last.length<2 ? <p className="text-danger">Last Name must be at least 2 characters long</p> : ""}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={(e)=>SetEmail(e.target.value)} type="text"/>
                    {email.length<5 ? <p className="text-danger">Email must be at least 5 characters long</p> : ""}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>SetPassword(e.target.value)} type="text"/>
                    {password.length<8 ? <p className="text-danger">Password must be at least 8 characters long</p> : ""}
                    {password != pwconfirm ? <p className="text-danger">Passwords must match</p> : ""}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input onChange={(e)=>SetPWConfirm(e.target.value)} type="text"/>
                    {pwconfirm.length<8 ? <p className="text-danger">Password must be at least 8 characters long</p> : ""}
                    {pwconfirm != password ? <p className="text-danger">Passwords must match</p> : ""}
                </div>
            </form>
            <br/>
            <p>Your Form Data</p>
            <p>First Name {name}</p>
            <p>Last Name {last}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {pwconfirm}</p>
        </div>
    )
}

export default Form;