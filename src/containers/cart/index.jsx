import { ButtonPrimary } from "@/src/components";
import { IconCart } from "@/styles/icons.styles";
import { useStorage, useTotal } from "@/src/hooks";
import { useRouter } from "next/router";
import { ListCart } from "..";
import { CartContainer } from "./cart.styles";

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
    <CartContainer>
      <div className="title__cart">
        <IconCart />
        <h1>Cart</h1>
      </div>
      <div className="list__cart">
        <ListCart payload={productCart} setProductCart={setProductCart} />
      </div>
      <h2 className="cart__ordered">{totalOrdered} Pesanan</h2>
      <h2 className="cart__ordered">Total Harga Rp.{totalPrice}</h2>
      <ButtonPrimary
        disabled={productCart.length === 0}
        onClick={() => submitPayment(productCart)}
      >
        Bayar Sekarang
      </ButtonPrimary>
    </CartContainer>
  );
}
