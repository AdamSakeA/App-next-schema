import { priceFormatted } from "../utils";

const ONGKIR = 15000;

export default function useTotal(data) {
  const price = data?.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const ordered = data?.reduce((total, product) => total + product.quantity, 0);

  const totalPrice = priceFormatted(price);

  const ongkirPlusPrice = price + ONGKIR;

  const totalPriceOngkir = priceFormatted(ongkirPlusPrice);

  return { totalPrice, totalOrdered: ordered, totalPriceOngkir };
}
