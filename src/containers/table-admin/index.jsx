import React from "react";
import styles from "./table-admin.module.scss";
import { Button } from "@/src/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function TableAdmin({ data, toggle }) {
  const deleteProduct = useMutation(
    async (productId) => {
      const response = await axios.delete(`/api/products/${productId}`);
      return response.data;
    },
    {
      onSuccess: () => {
        // Lakukan tindakan sesuai kebutuhan setelah produk berhasil dihapus
        console.log("Product deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting product:", error);
      },
    }
  );

  const handleDelete = (productId) => {
    deleteProduct.mutate(productId);
  };

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className={styles.table_admin__container}>
      <div>
        <h3>Dashboard</h3>
        <Button onClick={() => toggle((prevState) => !prevState)}>
          Add Product
        </Button>
      </div>
      <table className={styles.table_admin}>
        <thead>
          <tr className={styles.table_head}>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Desc</th>
            <th>Image Link</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={i} className={styles.table_row}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.image}</td>
                <td>
                  <label>Edit</label>
                  <label onClick={() => handleDelete(item.id)}>Delete</label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
