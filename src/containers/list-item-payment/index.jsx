import { CardItemPayment } from "@/src/components";
import { useTotal } from "@/src/hooks";
import styles from "./list-item-payment.module.scss";

export default function ListItemPayment({ payload }) {
  const { totalPrice } = useTotal(payload);
  const cardPayment = payload?.map((item, i) => (
    <CardItemPayment key={i} item={item} />
  ));

  return (
    <div className={styles.list_item}>
      <div className={styles.list_item__card}>{cardPayment}</div>
      <h2>Total Rp.{totalPrice} </h2>
    </div>
  );
}
