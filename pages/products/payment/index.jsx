import { Layout } from "@/src/components";
import { Desc, Wrapper, Title } from "../payment.styles";
import { FormPayment, ListItemPayment } from "@/src/containers";

export default function PaymentPage() {
  const storedProductCart = sessionStorage.getItem("productCart");
  const productCart = JSON.parse(storedProductCart);

  return (
    <Layout title="Payment Page" active="Products">
      <Wrapper>
        <Title>Pembayaran</Title>
        <Desc>
          Perhatikan kembali pesanan karena pesanan yang sudah di pesan tidak
          bisa dibatalkan
        </Desc>
      </Wrapper>
      <ListItemPayment payload={productCart} />
      <FormPayment productCart={productCart} />
    </Layout>
  );
}
