import React, { Component, useState } from "react";

const Cloudinary = () => {
  const [images, setImage] = useState("");
  const [url, setUrl] = useState("");

  const upload = () => {
    const data = new FormData();
    data.append("file", images);
    data.append("upload_preset", "plantitforward");
    data.append("cloud_name", "mushu");
    fetch("https://api.cloudinary.com/v1_1/mushu/image/upload/", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="images">Image</label>
      <input
      name="images"
      type="file"
      onChange={handleChange}
      />
      <button onClick={upload}>Upload</button>
{/* <div>
//<img src={url} />
</div> */}
    
    </div>
  );
};

export default Cloudinary;

//Link for assitance with cloudinary -https://medium.com/geekculture/how-to-upload-images-to-cloudinary-with-a-react-app-f0dcc357999c
