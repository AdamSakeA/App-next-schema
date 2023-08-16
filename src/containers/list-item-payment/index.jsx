import { CardItemPayment } from "@/src/components";
import { useTotal } from "@/src/hooks";
import styles from "./list-item-payment.module.scss";

export default function ListItemPayment({ payload }) {
  const { totalPrice, totalPriceOngkir } = useTotal(payload);
  const cardPayment = payload?.map((item, i) => (
    <CardItemPayment key={i} item={item} />
  ));

  return (
    <div className={styles.list_item}>
      <p>Total Harga Pesanan Rp.{totalPrice}</p>
      <p>Total Harga Ongkir Rp.15.000</p>
      <h4>Total Harga Rp.{totalPriceOngkir}</h4>
      <div className={styles.list_item__card}>{cardPayment}</div>
    </div>
  );
}
