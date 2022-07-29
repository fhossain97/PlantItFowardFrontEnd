import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

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
    console.log(formData);
    axios.put(`http://localhost:8000/item/${id}`, formData).then((res) => {
      setFormData(initialState);
      setItems(res.data);
      navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/item/${id}`)
    .then((res) => {
    setFormData(res.data);
    });
  }, [id]);


  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={formData.name}
          onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="images">Image</label>
        <input 
          id="images" 
          name="images" 
          type="text" 
          onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="genus">Genus</label>
        <input 
          id="genus" 
          name="genus" 
          type="text" 
          value={formData.genus}
          onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="status">Status</label>
        <input 
          id="status" 
          name="status" 
          type="text" 
          value={formData.status}
          onChange={handleChange} />
      </div>

      <input type="submit" value="Edit Item" />

    </StyledForm>
  );
};

export default ItemEdit;
