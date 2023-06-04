import {
  getAllMakanan,
  getAllPaket,
  getAllMinuman,
} from "@/src/services/apiConfig";
import { Layout } from "@/src/components";
import { ListProducts } from "@/src/containers";
import { Wrapper, Title, Desc } from "@/styles/product-page/products.styles";
import { useLoading } from "@/src/hooks";

export default function ProductsPage({ products }) {
  const isLoading = useLoading();

  return (
    <Layout title="Products Page" active="Products">
      <Wrapper>
        <Title>Menu Kami</Title>
        <Desc>
          Menu kami disajikan dengan sangat cepat dan memiliki bumbu rahasia
          yang unik.
        </Desc>
      </Wrapper>
      <ListProducts payload={products} isLoading={isLoading} />
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
