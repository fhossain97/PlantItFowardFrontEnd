import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import SearchIcon from '@mui/icons-material/Search';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


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


  const [show, setShow] = useState(false);
  const handleChange=()=>{
    setShow(!show);
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  console.log(user)
  let nav = user ? 
      <ul>
        <li>

          <div>
          {/* <SearchIcon onClick={openModal}/> */}
        {/* <button onClick={openModal}>Delete</button> */}
        {/* <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <SearchBar placeholder="Search for Plants..." data={items} closeModal={closeModal} />
        </Modal> */}
      </div>
          <SearchBar placeholder="Search for Plants..." data={items}/>
        </li>
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
