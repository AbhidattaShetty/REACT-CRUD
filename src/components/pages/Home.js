import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [user, setUser] = useState([])
    useEffect(() =>{
        loadUser()
    },[])

    const loadUser = async ()=>{
        const result= await axios.get("http://localhost:3002/users")
        setUser(result.data)
    }
    const deleteUser = async (id) =>{
        await axios.delete(`http://localhost:3002/users/${id}`)
        loadUser()
    }
    return <>
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {user.map((ele,index)=>{
                        return (
                            <tbody>
                            <tr>
                            <th scope="row">{index+1}</th>
                            <td>{ele.usernamename}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>
                            <Link className="btn btn-primary" to={`users/view/${ele.id}`}>View</Link>
                            <Link className="btn btn-outline-primary ms-3" exact to={`users/edit/${ele.id}`}>Edit</Link>
                            <Link onClick={()=>deleteUser(ele.id)} className="btn btn-danger ms-3" to=''>Delete</Link>
                            </td>
                        </tr>
                            </tbody>
                        )
                    })}
                        
                    
                </table>
            </div>
        </div>

    </>
}

export default Home;