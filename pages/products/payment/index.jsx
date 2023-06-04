/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "@/src/components";
import { Desc, Wrapper, Title } from "@/styles/payment-page/payment.styles";
import { FormPayment, ListItemPayment } from "@/src/containers";
import { useStorage } from "@/src/hooks";
import { useState, useEffect } from "react";

export default function PaymentPage() {
  const storage = useStorage();
  const [productCart, setProductCart] = useState();

  useEffect(() => {
    const stored = storage.getItem("productCart");
    const valueData = stored !== null ? stored : [];
    setProductCart(valueData);
  }, []);

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
