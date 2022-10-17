import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ItemView = ({ items, updateItemState }) => {
  let navigate = useNavigate();
  const deleteItem = (id) => {
    axios.delete(`http://localhost:8000/item/${id}`).then((res) => {
      console.log(res);
      updateItemState(id);
      return navigate("/");
    });
  };
  let { id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  console.log(item)

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
  <Card style={{ width: "15rem" }}>
      {item &&(<>
          <Card.Img variant="top" src={item.images} alt={item.description} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item> Genus: {item.genus}</ListGroup.Item>
            <ListGroup.Item> Status: {item.status}</ListGroup.Item>
            <ListGroup.Item> Quantity: {item.quantity}</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            
            
              
            
            <Link to={`/item/edit/${item._id}`} ><button class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Edit</button></Link>
            
            <button onClick={openModal} class="inline-block px-6 py-2.5 bg-red-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
              >Delete
            </button>
            <Modal
              ariaHideApp={false}
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Delete {item.name}?{" "}
              </h2>
              <button onClick={closeModal} class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Close</button>
              <button class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => deleteItem(item._id)}>Delete</button>
            </Modal>
          </Card.Body>
      
        </>
        )
    }
      </Card>


    );
  };

export default ItemView;
