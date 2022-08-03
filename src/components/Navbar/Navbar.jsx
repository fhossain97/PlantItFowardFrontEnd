import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";


const NavbarContainer = styled.nav`
  background-color: darkgreen;
  padding: 5px;

  ul {
    display: flex;
    justify-content: space-evenly;
  }
  li {
    list-style: none;
  }
`;


const Navbar = ({ user, handleLogout }) => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/item/")
      .then(res => res.json())
      .then(items => setItems(items));
  }, []);

  console.log(user)
  let nav = user ? 
      <ul>
        <li>
          {" "}
          <Link to="/"> Home </Link>
        </li>
        <li>
          {" "}
          <Link to="/new-item"> Trade </Link>
        </li>
        <li>
          {" "}
          <Link to="/items"> Previous Orders </Link>
        </li>
        <li>
          {" "}
          <Link to="/items/:id"> Order </Link>
        </li>
        <li>
          {" "}
          <Link to="/about"> About </Link>
        </li>
        <li>
          {" "}
          Hello @{user.name}
        </li>
        <li>
          <Link to='' onClick={handleLogout}>Log Out</Link>
        </li>
        <li>
          <SearchBar placeholder="Search for Plants..." data={items}/>
        </li>
      </ul> 
      :
       <ul>
         <li>
          {" "}
          <Link to="/"> Home </Link>
        </li>
        <li>
          {" "}
          <Link to="/login"> Login </Link>
        </li><li>
          {" "}
          <Link to="/signup"> Signup </Link>
        </li>
       </ul>

    return (
      <NavbarContainer>
        {nav}
      </NavbarContainer>
    )
  
};

export default Navbar;
