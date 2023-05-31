import {
  getAllMakanan,
  getAllPaket,
  getAllMinuman,
} from "@/src/services/apiConfig";
import { Layout } from "@/src/components";
import { Cart, ListProducts, ListTypeProducts } from "@/src/containers";
import {
  Wrapper,
  Title,
  Desc,
  Content,
  ProductTitleSideBar,
  ProductSideBar,
} from "../../styles/products.styles";
import { useState } from "react";

export default function ProductsPage({ products }) {
  const [productFiltered, setProductFiltered] = useState({
    name: products[0].name,
    data: products[0].data,
  });

  const [productCart, setProductCart] = useState([]);

  return (
    <Layout title="Products Page" active="Products">
      <Wrapper>
        <Title>Menu Kami</Title>
        <Desc>
          Menu kami disajikan dengan sangat cepat dan memiliki bumbu rahasia
          yang unik.
        </Desc>
      </Wrapper>
      <Content>
        <ProductTitleSideBar>
          <ListTypeProducts
            payload={products}
            setProductFiltered={setProductFiltered}
          />
        </ProductTitleSideBar>
        <ProductSideBar>
          <ListProducts
            payload={productFiltered}
            productCart={productCart}
            setProductCart={setProductCart}
          />
        </ProductSideBar>
      </Content>
      <Cart productCart={productCart} setProductCart={setProductCart} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const [makanan, minuman, paket] = await Promise.all([
    getAllMakanan(),
    getAllMinuman(),
    getAllPaket(),
  ]);

  const products = [
    { name: "Sate Taichan", data: makanan },
    { name: "Minuman", data: minuman },
    { name: "Paket Bucin", data: paket },
  ];

  return {
    props: { products }, // will be passed to the page component as props
  };
}
