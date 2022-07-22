import React, { Component } from "react";
import styled from 'styled-components'


const imageUpload = () => {
  return (
      <form>
        <h3>Upload Image</h3>
        <div className="file">
          <input type="file" />
        </div>
        <button type="submit">
            Upload
          </button>
          
      </form>
  );
};

export default imageUpload;
