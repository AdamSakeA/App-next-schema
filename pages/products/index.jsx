// import {
//   getAllMakanan,
//   getAllPaket,
//   getAllMinuman,
// } from "@/src/services/apiConfig";
import { Layout } from "@/src/components";
import { ListProducts } from "@/src/containers";
// import { useLoading } from "@/src/hooks";
import styles from "./products.module.scss";
import useGetAllCategories from "@/src/hooks/useGetAllCategories";

export default function ProductsPage() {
  const { categories, isLoading } = useGetAllCategories();
  // const isLoading = useLoading();
  console.log(categories);
  return (
    <Layout title="Products Page" active="Products">
      <div className={styles.products__wrapper}>
        <h1 className={styles.products__title}>Menu Kami</h1>
        <p className={styles.products__desc}>
          Menu kami disajikan dengan sangat cepat dan memiliki bumbu rahasia
          yang unik.
        </p>
      </div>
      {/* <ListProducts payload={products} isLoading={isLoading} /> */}
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const [makanan, minuman, paket] = await Promise.all([
//     getAllMakanan(),
//     getAllMinuman(),
//     getAllPaket(),
//   ]);

//   const products = [
//     { name: "Sate Taichan", data: makanan },
//     { name: "Minuman", data: minuman },
//     { name: "Paket Bucin", data: paket },
//   ];

//   return {
//     props: { products }, // will be passed to the page component as props
//   };
// }
