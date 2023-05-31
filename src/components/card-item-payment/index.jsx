import Image from "next/image";
import { CardItem, Body } from "./card-item-payment.styles";

export default function CardItemPayment({ item }) {
  return (
    <CardItem>
      <Image
        className="image-card-item__payment"
        src={item.image}
        alt={item.title}
        width={150}
        height={150}
      />
      <Body>
        <h1 className="title-card__payment">{item.title}</h1>
        <p className="desc-card__payment">Jumlah : {item.quantity}</p>
      </Body>
    </CardItem>
  );
}
