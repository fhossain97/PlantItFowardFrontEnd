import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {

    const loginState = {
        email: '', 
        pw: ''
    };


    const navigate = useNavigate()
    const [formData, setFormData] = useState(loginState)
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/auth/login', formData)
        .then(res => {
            console.log(res)
            if(res.status === 200){
                setUser(res.data)
                navigate('/')
            }
        })
    }


  return (
    <form className='container' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
            <label htmlFor='name'>Username</label>
            <input type='text' name='name' id='name' onChange={handleChange}  />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' onChange={handleChange}  />
        </div>
        <button type='submit'>Sign In</button>
        <imageUpload />
    </form>
  )
}

export default Login