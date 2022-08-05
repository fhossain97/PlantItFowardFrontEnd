import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";
import Modal from 'react-modal';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
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

const ItemView = ({items, updateItemState}) => {
    let navigate = useNavigate()
    const deleteItem = (id) => {
    axios.delete(`${process.env.REACT_APP_PIF_API_URL}/item/${id}`).then((res) => {
      console.log(res);
      updateItemState(id);
      return navigate("/")
    });
  };
    let {id} = useParams()

    const [item, setItem] = useState()
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_PIF_API_URL}/item/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [id])

    //console.log(item)

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

  return (
    <div className='grid'>
        {
        item && (<>
        <h1>{item.name}</h1>
        <img id='imgDetail' src={item.images} alt={item.description} />
        <p id='plantDes'>{item.description}</p>
        <button id='editButt'><Link to={`/item/edit/${item._id}`} > Edit Item </Link></button>
        <>
        <div className='grid'>
      <button id='deleteButt' onClick={openModal}>Delete</button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Are you sure you want to delete this item?</h2>
        <button onClick={closeModal}>close</button>
        <Button onClick={() => deleteItem(item._id)}>Delete</Button>
      </Modal>
    </div>

       
       
      </>
        
        </>)
        }

            
            
          </div>
      )
    }

export default ItemView