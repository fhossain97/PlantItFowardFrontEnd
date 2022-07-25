import React, { Component, useState } from "react";
import axios from "axios";

const Multer = () => {
  const [upload, setUpload] = useState({
    images: "",
  });

  const handleChange = (e) => {
    setUpload({ images: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", upload);
    axios.post("http://localhost:8000/item/", formData, {}).then((res) => {
      console.log(res);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">Image</label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleChange}
      />
    </form>
  );
};

export default Multer;

//link for assistance with multer - https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/
