import { Button } from "@/src/components";
import { useStorage, useTotal } from "@/src/hooks";
import { useRouter } from "next/router";
import { ListCart } from "..";
import { BiCart as IconCart } from "react-icons/bi";
import styles from "./cart.module.scss";

export default function Cart({ productCart, setProductCart }) {
  const { totalOrdered, totalPrice } = useTotal(productCart);
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
        <ListCart payload={productCart} setProductCart={setProductCart} />
      </div>
      <h2 className={styles.cart__ordered}>{totalOrdered} Pesanan</h2>
      <h2 className={styles.cart__ordered}>Total Harga Rp.{totalPrice}</h2>
      <Button
        disabled={productCart.length === 0}
        onClick={() => submitPayment(productCart)}
      >
        Bayar Sekarang
      </Button>
    </div>
  );
}
