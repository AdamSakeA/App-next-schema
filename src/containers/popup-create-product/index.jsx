import React from "react";
import styles from "./popup-create-product.module.scss";
import { useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import formattedText from "@/src/utils/formattedText";

export default function PopupCreateProduct({ toggle, category }) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    desc: "",
    kategoriId: "",
  });

  const imageRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.price ||
      !formData.desc ||
      !imageRef.current.files[0]
    ) {
      return;
    }

    const newFormData = new FormData();
    newFormData.append("image", imageRef.current.files[0]);
    newFormData.append("title", formData.title);
    newFormData.append("price", formData.price);
    newFormData.append("desc", formData.desc);
    newFormData.append("kategoriId", formData.kategoriId);

    try {
      const response = await axios.post("/api/products", newFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { status, data } = response.data;
      if (status === "Success") {
        console.log("Product created:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className={styles.popup_create}>
      <div className={styles.popup_content}>
        <div className={styles.popup_content__header}>
          <h1>New Product</h1>
          <MdOutlineClose
            className={styles.popup_content__icon}
            onClick={() => toggle((prevState) => !prevState)}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Image:</label>
              <input type="file" accept="image/*" ref={imageRef} />
            </div>
            <div>
              <label>Kategori</label>
              <select
                value={formData.kategoriId}
                name="kategoriId"
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                {category ? (
                  category.map((item) => (
                    <option key={item.id} value={item.id}>
                      {formattedText(item.title)}
                    </option>
                  ))
                ) : (
                  <option>Loading categories...</option>
                )}
              </select>
            </div>
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
}
