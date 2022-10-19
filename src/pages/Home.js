import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link as LinkRouter} from 'react-router-dom'

export const Home = () => {


    const [users, setUsers] = useState([]) 
    

    useEffect(() => {

        loadUsers();


    }, []);

    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data)
    }



  return (
    <div className='container' >
        <div className='py-4' >
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#ID</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody >
                {
                    users.map((user)=>{
                        return (
                            <tr className="py-2" key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <button className='btn btn-primary bg-primary m-1'>View</button>
                            <button className='btn btn-info-outline bg-light m-1'>Edit</button>
                            <button className='btn btn-danger bg-danger m-1'>Delete</button>
                            </tr> 
                        )
                    })
                }
               
            </tbody>
            </table>
        </div>
    </div>
  )
}
