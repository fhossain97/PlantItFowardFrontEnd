<<<<<<< HEAD
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ImageUpload from '../components/MulterComponents/ImageUpload'
=======
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/FormStyle/Form.css"
>>>>>>> development


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
    // images.append("file", formData.images);
    console.log(formData);
    axios.post("http://localhost:8000/item", images).then((res) => {
      setFormData(initialState);
      addItem(res.data);
      navigate("/", { replace: true });
    });
  };

  const handleFile = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };

  return (
<<<<<<< HEAD
    <StyledForm onSubmit={handleSubmit}>
        <h1> Create new Item</h1>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' onChange={handleChange} />
            </div>
            
            <div>
                <label htmlFor='quantity'>Quantity</label>
                <input id='quantity' name='quantity' type='text'     onChange={handleChange} />
            </div>
            <div>
                <ImageUpload />
                <label htmlFor='image'>Image</label>
                <input id='image' name='image' type='text'   onChange={handleChange} />
            </div>
            {/* // <div>
                // <label htmlFor='uniqueIdentifier'>SKU</label>
                // <input id='uniqueIdentifier' name='uniqueIdentifier' type='text'   onChange={handleChange}/>
            // </div> */}
            <div>
                <label htmlFor='description'>Description</label>
                <input id='description' name='description' type='text'  onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='genus'>Genus</label>
                <input id='genus' name='genus' type='text'  onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='status'>Status</label>
                <input id='status' name='status' type='text'  onChange={handleChange} />
            </div>

            <input type='submit' value='Create Item' />
    </StyledForm>
  )
}
export default NewItem
=======
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h1>New Trade Item</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="genus">Genus</label>
        <input id="genus" name="genus" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <input id="status" name="status" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="images">Image</label>
        <input
          name="images"
          id="images"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleFile}
        />
      </div>

      <div class="button"><button id="new" type="submit"> New Plant </button></div>
    </form>
  );
};

export default NewItem;
>>>>>>> development
