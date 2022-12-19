import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewItem = ({ addItem }) => {
  const initialState = {
    name: "",
    quantity: "",
    images: "",
    description: "",
    genus: "",
    status: "",
  };
  const navigate = useNavigate();
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
    images.append("quantity", formData.quantity);
    images.append("description", formData.description);
    images.append("genus", formData.genus);
    images.append("status", formData.status);
    console.log(formData);
    axios.post(`${process.env.REACT_APP_PIF_API_URL}/item/`, images).then((res) => {
      setFormData(initialState);
      addItem(res.data);
      navigate('/', { replace: true });
    });
  };

  const handleFile = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };

  return (
    <div class="container-box">
      <div class="form-container">
        <div class="image-holder"></div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 class="text-center">New Plant</h2>

          <div class="form-group">
            <input
              class="form-control"
              id="name"
              placeholder="Name"
              name="name"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <input
              class="form-control"
              id="quantity"
              name="quantity"
              type="text"
              placeholder="Quantity"
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
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <input
              class="form-control"
              id="genus"
              name="genus"
              placeholder="Genus"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <input
              id="status"
              placeholder="Status"
              name="status"
              type="text"
              onChange={handleChange}
              class="form-control"
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
                    id="images"
                    accept="image/png, image/jpeg, image/jpg"
                    type="file"
                    onChange={handleFile}
                    class="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    // id="default_size"
                    
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
              Add +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;

//link: https://webdesignerwall.com/wdw-snippet/signup-form-with-image-on-left-side
