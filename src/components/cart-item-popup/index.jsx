import Image from "next/image";
import { Container, Contents } from "./cart-item.styles";
import { IconMin, IconPlus } from "@/styles/icons.styles";

export default function CartItemPopUp({ cart, updateCart }) {
  const handleIncrementQuantity = () => {
    const updatedQuantity = cart.quantity + 1;
    updateCart({ ...cart, quantity: updatedQuantity });
  };

  const handleDecrementQuantity = () => {
    const updatedQuantity = cart.quantity - 1;
    updateCart({ ...cart, quantity: updatedQuantity });
  };

  return (
    <Container>
      <Image
        className="image-cart__item"
        src={cart.image}
        alt={cart.title}
        width={150}
        height={150}
      />
      <Contents>
        <h2 className="title-cart__item">{cart.title}</h2>
        <div className="body-cart__item">
          <IconMin onClick={() => handleDecrementQuantity()} />
          <p className="quantity-cart__item">{cart.quantity}</p>
          <IconPlus onClick={() => handleIncrementQuantity()} />
        </div>
      </Contents>
    </Container>
  );
}
