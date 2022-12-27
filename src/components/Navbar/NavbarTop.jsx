import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import './Navbar.css'

const NavbarTop = ({user, handleLogout }) => {
  const [items, setItems] = useState([]);

  let token = localStorage.getItem('token')
  useEffect(() => {
    fetch(`${process.env.REACT_APP_PIF_API_URL}/item/`)
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []);

  let nav = token ? (
    <div className="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">

        {/* <div style={{imageStyle}}>
  <iframe loading="lazy" style={{frameStyle}} title='frame'
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFSPY7ciuE&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div> */}
{/* <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFSPY7ciuE&#x2F;watch?utm_content=DAFSPY7ciuE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Add a heading</a> by Farhana Hossain */}

<h1 className="title">Plant It Forward</h1>

          <ul className="nav">
            <li className="nav-item">
              <Link style={{textDecoration: 'none'}} to="/"> 
               Home
              </Link>
          
            </li>
            <li className="nav-item">
              <Link style={{textDecoration: 'none'}} to="/new-item">
                + Plant
              
              </Link>
        
            </li>
            <li className="nav-item">
              <Link style={{textDecoration: 'none'}} to="/chat">
               Chat
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link style={{textDecoration: 'none'}} to="/findflorist">
                Map
              </Link>
            </li>
            <li className="nav-item">
              {" "}
             
              <Link to="" style={{textDecoration: 'none'}} onClick={handleLogout}>
              {user.name} Log Out
              </Link>
            </li>

            <SearchBar data={items} />
          </ul>
        </nav>
        <div className="grad-bar"></div>
      </div>
    </div>
  ) : (
    <div className="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/login" style={{textDecoration: 'none'}}> Login
             
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/signup" style={{textDecoration: 'none'}}> Signup </Link>
          </li>
          </ul>
        </nav>
        <div className="grad-bar"></div>
      </div>
    </div>
  );

  return <nav>{nav}</nav>;
};

export default NavbarTop;
