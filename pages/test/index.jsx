import React from "react";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [kategoriId] = "1";

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !price || !desc) {
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("kategoriId", kategoriId);

    try {
      const response = await axios.post("/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { status, data } = response.data;
      if (status === "Success") {
        console.log("Product created:", data);
        // Lakukan tindakan sesuai kebutuhan setelah produk berhasil dibuat
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={desc} onChange={handleDescChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);
  // const [data, setData] = useState({
  //   title: "",
  //   price: 0,
  //   desc: "",
  //   kategoriId: "",
  // });

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   setData(event.target.valu)
  // };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   if (!selectedFile) {
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("image", selectedFile);

  //   try {
  //     const response = await axios.post("/api/products", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     const imageUrl = response.data.imageUrl;
  //     console.log("Image URL:", imageUrl);
  //     // setImageUrl(imageUrl);
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  // return (
  //   <div>
  //     <form onSubmit={handleUpload}>
  //     <div>
  //         <label>title</label>
  //         <input
  //           type="text"
  //           name="title"
  //           accept="image/*"
  //           onChange={handleFileChange}
  //         />
  //       </div>
  //       <div>
  //         <label>image</label>
  //         <input
  //           type="file"
  //           name="file"
  //           accept="image/*"
  //           onChange={handleFileChange}
  //         />
  //       </div>
  //       <button type="submit">Upload</button>
  //     </form>
  //   </div>
  // );
}
