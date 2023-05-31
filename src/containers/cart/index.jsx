import { ButtonPrimary, ButtonSecondary, PopUpCart } from "@/src/components";
import { CartContainer, ButtonContainer } from "./cart.styles";
import { IconCart } from "@/styles/icons.styles";
import { useStorage, useToggle, useTotal } from "@/src/utils/hooks";
import { useRouter } from "next/router";

export default function Cart({ productCart, setProductCart }) {
  const { status, toggleStatus } = useToggle();
  const storage = useStorage();
  const { totalOrdered, totalPrice } = useTotal(productCart);
  const router = useRouter();

  const handleUpdateCart = (updatedProduct) => {
    const updatedItems = productCart.map((product) => {
      if (product.title === updatedProduct.title) {
        return { ...product, quantity: updatedProduct.quantity };
      }
      return product;
    });
    setProductCart(updatedItems);
  };

  const submitPayment = (data) => {
    storage.setItem("productCart", data, "session");
    router.push("/products/payment");
  };

  if (status) {
    return (
      <PopUpCart
        data={productCart}
        amountPrice={totalPrice}
        toggleStatus={toggleStatus}
        updateCart={handleUpdateCart}
        submitPayment={submitPayment}
      />
    );
  }

  return (
    <CartContainer>
      <div className="title__cart">
        <IconCart />
        <h1>Cart</h1>
      </div>
      <h2>{totalOrdered} Pesanan</h2>
      <h2>Total Harga Rp.{totalPrice}</h2>
      <ButtonContainer>
        <ButtonPrimary onClick={() => submitPayment(productCart)}>
          Bayar
        </ButtonPrimary>
        <ButtonSecondary onClick={() => toggleStatus()}>
          Lihat Pesanan
        </ButtonSecondary>
      </ButtonContainer>
    </CartContainer>
  );
}
