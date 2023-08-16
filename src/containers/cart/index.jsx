import { Button } from "@/src/components";
import { useStorage, useTotal } from "@/src/hooks";
import { useRouter } from "next/router";
import { ListCart } from "..";
import { BiCart as IconCart } from "react-icons/bi";
import styles from "./cart.module.scss";

export default function Cart({ productCart = [], setProductCart }) {
  const { totalOrdered, totalPrice, totalPriceOngkir } = useTotal(productCart);
  const storage = useStorage();
  const router = useRouter();

  const submitPayment = (data) => {
    const url = "/products/payment";
    storage.setItem("productCart", data, "session");
    router.push(url);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart__title}>
        <IconCart className={styles.cart__icon} />
        <h1>Cart</h1>
      </div>
      <div className={styles.cart__list_product}>
        {totalOrdered < 5 && (
          <h2 className={styles.cart__ordered}>Minimal Pembelian 5</h2>
        )}
        <ListCart payload={productCart} setProductCart={setProductCart} />
      </div>
      <h2 className={styles.cart__ordered}>{totalOrdered} Pesanan</h2>
      <h2 className={styles.cart__ordered}>
        Total Harga Pesanan Rp.{totalPrice}
      </h2>
      <h2 className={styles.cart__ordered}>
        Total Ongkir Rp.{totalOrdered >= 1 ? "15.000" : "0"}
      </h2>
      <h2 className={styles.cart__ordered}>
        Total Harga Rp.{totalOrdered >= 1 ? totalPriceOngkir : "0"}
      </h2>
      <Button
        disabled={totalOrdered < 5}
        onClick={() => submitPayment(productCart)}
      >
        Bayar Sekarang
      </Button>
    </div>
  );
}
