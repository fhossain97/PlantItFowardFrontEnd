import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/FormStyle/Form.css";

const ItemEdit = ({ setItems }) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const initialState = {
    name: "",
    quantity: "",
    images: "",
    description: "",
    genus: "",
    status: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const images = new FormData();
    images.append("images", formData.images);
    images.append("name", formData.name);
    images.append("genus", formData.genus);
    images.append("quantity", formData.quantity);
    images.append("description", formData.description);
    images.append("status", formData.status);
    //console.log(formData)
    e.preventDefault();
    //console.log(formData);
    axios.put(`http://localhost:8000/item/${id}`, images).then((res) => {
      setFormData(initialState);
      setItems(res.data);
      navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/item/${id}`).then((res) => {
      setFormData(res.data);
    });
  }, [id]);

  const handleFile = (e) => {
    //console.log(e.target)
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };

  return (
    <div class="container-box">
      <div class="form-container">
        <div class="image-holder"></div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 class="text-center">Edit {formData.name}</h2>

          <div class="form-group">
            <input
              class="form-control"
              id="name"
              placeholder="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <input
              class="form-control"
              id="quantity"
              placeholder="Quantity"
              name="quantity"
            
              type="text"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <input
         
              class="form-control"
              id="description"
              placeholder="Description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <input
            htmlFor='Genus'
              class="form-control"
              id="genus"
              name="genus"
              placeholder="Genus"
              type="text"
             
              value={formData.genus}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <input
            htmlFor='status'
              id="status"
              placeholder="Status"
              name="status"
              type="text"
             
              class="form-control"
              value={formData.status}
              onChange={handleChange}
            />
          </div>

          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-black-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-black-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Upload Image </span>

              <div className="flex text-sm text-black-600">
                <label
                  htmlFor="images"
                  className="relative cursor-pointer rounded-md bg-white font-large text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
                >
                  <input
                    name="images"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="images"
                    onChange={handleFile}
                    class="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="bg-black-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Edit Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemEdit;
