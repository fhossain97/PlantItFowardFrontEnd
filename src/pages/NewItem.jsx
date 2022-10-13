import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/FormStyle/Form.css"


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
    // images.append("file", formData.images);
    console.log(formData);
    axios.post(`http://localhost:8000/item/`, images).then((res) => {
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
  //   <form onSubmit={handleSubmit} encType="multipart/form-data">
  //     <h1>New Trade Item</h1>
//   <div class="hidden sm:block" aria-hidden="true"> 
//   <div class="py-5">
//     <div class="border-t border-gray-200"></div>
//   </div>
// </div>


{/* <div class="mt-5 md:col-span-2 md:mt-0">
<form action="#" method="POST">
  <div class="shadow sm:overflow-hidden sm:rounded-md">
    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-3 sm:col-span-2">
          <label for="company-website" class="block text-sm font-medium text-gray-700">Name</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>
            <input type="text" name="name" id="name" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Name" onChange={handleChange}/>
          </div>
        </div>
      </div> */}



  //     <div>
  //       <label htmlFor="name">Name</label>
  //       <input id="name" name="name" type="text" onChange={handleChange} />
  //     </div>

  //     <div>
  //       <label htmlFor="quantity">Quantity</label>
  //       <input
  //         id="quantity"
  //         name="quantity"
  //         type="text"
  //         onChange={handleChange}
  //       />
  //     </div>

  //     <div>
  //       <label htmlFor="description">Description</label>
  //       <input
  //         id="description"
  //         name="description"
  //         type="text"
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="genus">Genus</label>
  //       <input id="genus" name="genus" type="text" onChange={handleChange} />
  //     </div>
  //     <div>
  //       <label htmlFor="status">Status</label>
  //       <input id="status" name="status" type="text" onChange={handleChange} />
  //     </div>
  //     <div>
  //       <label htmlFor="images">Image</label>
  //       <input
  //         name="images"
  //         id="images"
  //         type="file"
  //         accept="image/png, image/jpeg, image/jpg"
  //         onChange={handleFile}
  //       />
  //     </div>

  //     <div className="button"><button id="new" type="submit"> New Plant </button></div>
//   <div class="hidden sm:block" aria-hidden="true"> 
//   <div class="py-5">
//     <div class="border-t border-gray-200"></div>
//   </div>
// </div>
  //   </form>
  // );
  <h1>


  <div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
  <h4 class="text-lg font-medium leading-6 text-gray-900">New Plant</h4>



            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">About</label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Photo</label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Cover photo</label>
              <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

</h1>
<></>
)
};



export default NewItem;
