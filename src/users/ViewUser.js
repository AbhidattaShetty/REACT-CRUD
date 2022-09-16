import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
    const [user, setUser] = useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website : ""
    })
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3002/users/${id}`)
        .then((res)=>{
            setUser(res.data)
        })
    },[])

    return (
        <div className="container py-4">
            <Link className="btn btn-primary " to="/">Back To Home</Link>
            <p className="display-6">User Id : {id}</p>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name : {user.name}</li>
                <li className="list-group-item">username : {user.username}</li>
                <li className="list-group-item">email : {user.email}</li>
                <li className="list-group-item">phone : {user.phone}</li>
                <li className="list-group-item">website : {user.website}</li>
            </ul>
        </div>
    )
}

export default ViewUser