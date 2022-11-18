import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import "./Navbar.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

// const imageStyle = styled.div`
//       text-align:center;
//         background-color:transparent;
//         border: 2px solid black;
//         display:block;
  
// `

// const frameStyle = styled.iframe`
// position: absolute; 
// width: 50%; 
// height: 50%; 
// top: 0; 
// left: 0; 
// border: none; 
// padding: 0;
// margin: 0;
// `

const NavbarTop = ({ user, handleLogout }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/item/`)
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []);

  let nav = user ? (
    <div class="page-wrapper">
      <div class="nav-wrapper">
        <div class="grad-bar"></div>
        <nav class="navbar">

        {/* <div style={{imageStyle}}>
  <iframe loading="lazy" style={{frameStyle}} title='frame'
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFSPY7ciuE&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div> */}
{/* <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFSPY7ciuE&#x2F;watch?utm_content=DAFSPY7ciuE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Add a heading</a> by Farhana Hossain */}

<h1 className="title">Plant It Forward</h1>

          <ul class="nav">
            <li class="nav-item">
              <Link style={{textDecoration: 'none'}} to="/"> 
               Home
              </Link>
          
            </li>
            <li class="nav-item">
              <Link style={{textDecoration: 'none'}} to="/new-item">
                + Plant
              
              </Link>
        
            </li>
            <li class="nav-item">
              <Link style={{textDecoration: 'none'}} to="/chat">
               Chat
              </Link>
            </li>
            <li class="nav-item">
              {" "}
              <Link style={{textDecoration: 'none'}} to="/findflorist">
                Map
              </Link>
            </li>
            <li class="nav-item">
              {" "}
             
              <Link to="" style={{textDecoration: 'none'}} onClick={handleLogout}>
              {user.name} Log Out
              </Link>
            </li>

            <SearchBar data={items} />
          </ul>
        </nav>
        <div class="grad-bar"></div>
      </div>
    </div>
  ) : (
    <div class="page-wrapper">
      <div class="nav-wrapper">
        <div class="grad-bar"></div>
        <nav class="navbar">
        <ul class="nav">
          <li class="nav-item">
            <Link to="/login" style={{textDecoration: 'none'}}> Login
             
            </Link>
          </li>
          <li class="nav-item">
          <Link to="/signup" style={{textDecoration: 'none'}}> Signup </Link>
          </li>
          </ul>
        </nav>
        <div class="grad-bar"></div>
      </div>
    </div>
  );

  return <nav>{nav}</nav>;
};

export default NavbarTop;
