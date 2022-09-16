import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () =>{
    let navigate =useNavigate()
    const [user, setUser] = useState({
        name : "",
        username :"",
        email :"",
        phone : "",
        website :""
    })
    function handleChange(e){
        const {value, name} = e.target
        setUser((prevVale)=>{
            return {
                ...prevVale,
                [name] : value
            }
        })
    }
    const handleClick = async(e) =>{
        e.preventDefault()
        await axios.post("http://localhost:3002/users",user);
        navigate("/")
    }

    return(
        <div className="container">
            <div className="py-4">
                <h1>Add A User</h1>
                <form>
                <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Enter Your Name</label>
                        <input onChange={handleChange} type="text" value ={user.name} name="name" class="form-control" id="exampleInputName" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputUsername" class="form-label">Enter Your Username</label>
                        <input onChange={handleChange} type="text" value={user.username} name="username" class="form-control" id="exampleInputUsername" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={handleChange} type="email" value ={user.email} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputUsername" class="form-label">Enter Your Phone Number</label>
                        <input onChange={handleChange} type="text" value ={user.phone} name="phone" class="form-control" id="exampleInputPhone" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputUsername" class="form-label">Enter Your Website</label>
                        <input onChange={handleChange} type="text" value ={user.website} name="website" class="form-control" id="exampleInputWebsite" />
                    </div>
                    
                    <button onClick={handleClick} type="submit" class="btn btn-primary">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser