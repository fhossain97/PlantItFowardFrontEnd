import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const SignupTest = ({setUser, handleSignupOrLogin}) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '', 
        password: '', 
        passwordConf: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/signup', formData)
        .then(res => {
          console.log(res)
          if(res.status === 200){
            handleSignupOrLogin()
            navigate('/')
          }
        })
    }

  return (
    <div onSubmit={handleSubmit} className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <title>Sign Up</title>
    <div className="max-w-md w-full space-y-8">
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded shadow-sm">
          <div>
            <label htmlFor="name" className="sr-only">
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-green-700
              focus:border-green-700 focus:z-10 sm:text-sm"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-green-700
              focus:border-green-700 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="passwordConf" className="sr-only">
            </label>
            <input
              id="passwordConf"
              name="passwordConf"
              type="password"
              required
              className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-green-700
              focus:border-green-700 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-green-700 hover:bg-green-900
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-green-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignupTest