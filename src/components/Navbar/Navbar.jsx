import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  background-color: #f4e9d1;
  padding: 5px;

  ul {
    display: flex;
    justify-content: space-evenly;
  }
  li {
    list-style: none;
    color: #8c573c;
  }
`;

const Navbar = ({ user, handleLogout }) => {
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
          Hello {user.name}
        </li>
        <li>
          <Link to='' onClick={handleLogout}>Log Out</Link>
        </li>
      </ul> 
      : null
      //  <ul>
      //    <li>
      //     {" "}
      //     <Link to="/"> Home </Link>
      //   </li>
      //   <li>
      //     {" "}
      //     <Link to="/about"> About </Link>
      //   </li>
      //  </ul>

    return (
      <NavbarContainer>
        {nav}
      </NavbarContainer>
    )
  
};

export default Navbar;
