import { useState } from "react";
import { ListItemProducts, ListTypeProducts, Cart } from "..";
import {
  CardTitleProductSkeleton,
  CardProductSkeleton,
} from "@/src/components";
import styles from "./list-products.module.scss";

export default function ListProducts({ payload, isLoading }) {
  const [productFiltered, setProductFiltered] = useState({
    name: payload[0]?.name,
    data: payload[0]?.data,
  });

  const [productCart, setProductCart] = useState([]);

  const showTypes = isLoading ? (
    <CardTitleProductSkeleton />
  ) : (
    <ListTypeProducts
      data={payload}
      productFiltered={productFiltered}
      setProductFiltered={setProductFiltered}
    />
  );

  const showProducts = isLoading ? (
    <CardProductSkeleton />
  ) : (
    <ListItemProducts
      products={productFiltered.data}
      productCart={productCart}
      setProductCart={setProductCart}
    />
  );

  return (
    <div className={styles.list_products}>
      {/* left */}
      <div className={styles.list_products__shop}>
        <div className={styles.list_products__types}>{showTypes}</div>
        <div className={styles.list_products__product}>{showProducts}</div>
      </div>
      {/* right */}
      <Cart productCart={productCart} setProductCart={setProductCart} />
    </div>
  );
}
