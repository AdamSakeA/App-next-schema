import { IconClose } from "@/styles/icons.styles";
import { ButtonSecondary, CartItemPopUp } from "..";
import { Container, Contents, HeadContent } from "./popup-cart.styles";

export default function PopUpCart(props) {
  const { data, toggleStatus, updateCart, submitPayment, amountPrice } = props;
  const cartItems = data.map((item, i) => (
    <CartItemPopUp key={i} cart={item} updateCart={updateCart} />
  ));

  return (
    <Container>
      <Contents>
        <HeadContent>
          <h1 className="title-popup__cart">Pesanan</h1>
          <IconClose onClick={() => toggleStatus()} />
        </HeadContent>
        {cartItems}
        <h3>Total : {amountPrice}</h3>
        <ButtonSecondary onClick={() => submitPayment(data)}>
          Bayar
        </ButtonSecondary>
      </Contents>
    </Container>
  );
}
