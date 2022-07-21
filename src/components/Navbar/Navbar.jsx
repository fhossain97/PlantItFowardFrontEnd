import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate} from 'react-router-dom'

const NavbarContainer = styled.nav`
    background-color: green;
    padding: 5px;
    
    ul {
        display: flex;
        justify-content: space-evenly;
    }
    li {
        list-style: none;
    }
    
`

const Navbar = ({user, setUser}) => {
    const navigate = useNavigate()

  return (
    <NavbarContainer>
        <ul>
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/new-item'> Add a plant to trade! </Link></li>
            <li> <Link to='/items'> Orders </Link></li>
            <li> <Link to='/items/:id'> Order </Link></li>
            <li> <Link to='/about'> About </Link></li>
           { user ? <li>Welcome {user.name}</li> : <li> <Link to='/login'> Login </Link></li>}
           { user ? <button onClick={()=>  { 
                setUser(null)
                navigate('/login')
            }}>Log Out</button> : null}
        </ul>
    </NavbarContainer>
  )
}

export default Navbar