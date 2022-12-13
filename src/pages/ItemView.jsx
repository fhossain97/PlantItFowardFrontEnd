import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";



const ItemView = ({ items, updateItemState }) => {
  let navigate = useNavigate();
  const deleteItem = (id) => {
    axios.delete(`process.env.REACT_APP_PIF_API_URL/item/${id}`).then((res) => {
      console.log(res);
      updateItemState(id);
      return navigate("/");
    });
  };
  let { id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PIF_API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  // console.log(item);

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
    <div className="flex justify-center">
    {item && (
      <>
<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
  <img className=" w-full h-150 md:h-auto object-cover md:w-100 rounded-t-lg md:rounded-none md:rounded-l-lg" src={item.images} alt={item.description}  />
  <div className="p-6 flex flex-col justify-start">
    <h5 className="text-black-900 text-xl font-medium mb-2">{item.name}</h5>
    <p className="text-black-700 text-base mb-4">
      {item.description}
    </p>
    <p className="text-black-900 font-medium">Genus: {item.genus}</p>
<p className="text-black-900 font-medium">Status: {item.status}</p>
<p className="text-black-900 font-medium">Quantity: {item.quantity}</p>
          <span>
          <Link to={`/item/edit/${item._id}`}>
            <button className="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
              Edit  
            </button>
            </Link>
        <button
            onClick={openModal}
            className="inline-block px-6 py-2.5 bg-red-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
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
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Delete {item.name}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500" ref={(_subtitle) => (subtitle = _subtitle)}> Delete this plant? Action cannot be undone.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button type="button" className="inline-block px-6 py-2.5 bg-gray-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out"
        onClick={closeModal}
>Cancel </button>
        <button type="button" className="inline-block px-6 py-2.5 bg-red-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
onClick={() => deleteItem(item._id)}
>Delete </button>
      </div>
    </div>
  </div>
</div>
</div>
          </Modal>

</span>
</div>
</div>
 </>

    )}
  </div>

  );
};

export default ItemView;
