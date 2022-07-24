import React, { Component, useState } from "react";


const ImageUpload = () => {

    const [image, setImage] = useState('')
    const [url, setUrl ] = useState('');

    const upload = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "plantitforward")
    data.append("cloud_name","mushu")
    fetch(" https://api.cloudinary.com/v1_1/mushu/image/upload",{
    method:"post",
    body: data
    })
    .then(res => res.json())
    .then(data => {
    setUrl(data.url)
    })
    .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setImage(e.target.files[0])
    }

  return (

<form>
    <label htmlFor='image'>Image</label>
    <input type="file" accept="image/png, image/jpeg" onChange= {handleChange} />
    <button onClick={upload}>Upload</button>
</form>

  );
};

export default ImageUpload;


//Link for assitance with cloudinary -https://medium.com/geekculture/how-to-upload-images-to-cloudinary-with-a-react-app-f0dcc357999c
