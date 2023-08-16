import { Layout } from "@/src/components";
import styles from "./howtopay.module.scss";
import { HOWTOPAY } from "@/config/HOWTOPAY";
import CardHowToPay from "@/src/components/card-howtopay";

export default function HowToPayPage() {
  const showCardHowToPay = HOWTOPAY.map((item, i) => (
    <CardHowToPay key={i} payload={item} number={i + 1} />
  ));
  return (
    <Layout title="How To Pay" active="How To Pay">
      <div className={styles.howtopay__wrapper}>
        <h1 className={styles.howtopay__title}>Tata Cara Pembelian</h1>
        <p className={styles.howtopay__desc}>
          Bingung bagaimana cara transaksi pembelian? berikut arahannya!
        </p>
      </div>
      <div>{showCardHowToPay}</div>
    </Layout>
  );
}
