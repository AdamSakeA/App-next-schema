import { CardItemPayment } from "@/src/components";
import { Container } from "./list-item-payment.styles";
import { useTotal } from "@/src/utils/hooks";

export default function ListItemPayment({ payload }) {
  const { totalPrice } = useTotal(payload);
  const cardPayment = payload.map((item, i) => (
    <CardItemPayment key={i} item={item} />
  ));

  return (
    <Container>
      <div className="list-item__card">{cardPayment}</div>
      <h2>Total Rp.{totalPrice} </h2>
    </Container>
  );
}
