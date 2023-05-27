import { CardProduct } from "@/src/components";
import { ProductContainer } from "./list-products.styles";

export default function ListProducts({ payload }) {
  const detailProduct = payload?.data?.map((item, i) => (
    <CardProduct key={i} product={item} />
  ));

  return (
    <ProductContainer>
      <h1 className="title-products">{payload.name}</h1>
      <div className="card-products">{detailProduct}</div>
    </ProductContainer>
  );
}
