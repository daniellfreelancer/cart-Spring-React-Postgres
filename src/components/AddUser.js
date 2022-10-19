import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link as LinkRouter} from 'react-router-dom'

export const AddUser = () => {
    const navigate = useNavigate()

    const [user, setUser] =useState({
        name:"",
        username:"",
        email:""
    });


    const {name, username, email} = user;


    const onInputChange=(e)=>{

        setUser({...user, [e.target.name]: e.target.value})
    };

    const handleNewUser = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/users/newUser", user)
        navigate('/');
    };


  return (
    <div className='container'>



        <div className='row' >
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e) => handleNewUser(e)}>

                    
                    <div className='mb-3'>
                       <label htmlFor='Name' className='form-label'>
                        Name
                        </label> 
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter your name'
                        name='name'
                        value={name}
                        onChange={(e)=> onInputChange(e)}
                        />                        
                    </div>
                    <div className='mb-3'>
                       <label htmlFor='Username' className='form-label'>
                        Username
                        </label> 
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter your username'
                        name='username'
                        value={username}
                        onChange={(e)=> onInputChange(e)}
                        />                        
                    </div>
                    <div className='mb-3'>
                       <label htmlFor='Email' className='form-label'>
                        E-mail
                        </label> 
                        <input
                        type={"email"}
                        className="form-control"
                        placeholder='Enter your email'
                        name='email'
                        value={email}
                        onChange={(e)=> onInputChange(e)}
                        />                        
                    </div>
                    <button type='submit' className='btn btn-outline-primary'> Submit</button>
                    <LinkRouter to='/' className='btn btn-outline-danger mx-2'> Cancel</LinkRouter>
                    </form>
            </div>

        </div>

        

    </div>
  )
}
