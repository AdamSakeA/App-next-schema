import Image from "next/image";
import { Container, Contents } from "./card-cart-product.styles";
import { IconMin, IconPlus } from "@/styles/icons.styles";
import { priceFormatted } from "@/src/utils";

export default function CardCartProduct({ cart, updateCart }) {
  const handleIncrementQuantity = () => {
    const updatedQuantity = cart.quantity + 1;
    updateCart({ ...cart, quantity: updatedQuantity });
  };

  const handleDecrementQuantity = () => {
    const updatedQuantity = cart.quantity - 1;
    updateCart({ ...cart, quantity: updatedQuantity });
  };

  const totalPriceQuantity = cart.price * cart.quantity;

  return (
    <Container>
      <Image
        src={cart.image}
        alt={cart.title}
        className="img__cart"
        width={80}
        height={80}
      />
      <Contents>
        <h2 className="title-cart__item">{cart.title}</h2>
        <div className="body-cart__item">
          <p className="price-cart__item">
            Rp.{priceFormatted(totalPriceQuantity)}
          </p>
          <div className="quantity-container__item">
            <IconMin
              className="icon-cart__item"
              onClick={() => handleDecrementQuantity()}
            />
            <p className="quantity-cart__item">{cart.quantity}</p>
            <IconPlus
              className="icon-cart__item"
              onClick={() => handleIncrementQuantity()}
            />
          </div>
        </div>
      </Contents>
    </Container>
  );
}
