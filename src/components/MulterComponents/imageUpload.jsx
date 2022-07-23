import React, { Component, useState } from "react";
import styled from 'styled-components'



const ImageUpload = () => {

    const [upload, setUpload] = useState({
        file: null
    })

    const handleChange = (e) => {
        e.preventDefault()
        setUpload(URL.createObjectURL(e.target.upload[0]))
    }







  return (
<form>

<label htmlFor='image'>Image</label>
<input type="file" accept="image/png, image/jpeg" onChange={handleChange}/>
<img src={upload} />



</form>
  );
};

export default ImageUpload;
