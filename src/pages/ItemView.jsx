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

  console.log(item);

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
    <Card className="view">
      {item && (
        <>
          <Card.Img id="imgDetail" variant="top" src={item.images} alt={item.description} />
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
            <Link to={`/item/edit/${item._id}`}>
              <button class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                Edit
              </button>
            </Link>

            <button
              onClick={openModal}
              class="inline-block px-6 py-2.5 bg-red-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Delete
            </button>
            <Modal
              ariaHideApp={false}
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Delete {item.name}</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500" ref={(_subtitle) => (subtitle = _subtitle)}> Delete this plant? Action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" class="inline-block px-6 py-2.5 bg-gray-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out"
          onClick={closeModal}
>Cancel </button>
          <button type="button" c class="inline-block px-6 py-2.5 bg-red-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
onClick={() => deleteItem(item._id)}
>Delete </button>
        </div>
      </div>
    </div>
  </div>
</div>
            </Modal>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default ItemView;
