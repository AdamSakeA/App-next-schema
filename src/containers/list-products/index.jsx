import { CardProduct } from "@/src/components";
import { ProductContainer } from "./list-products.styles";

export default function ListProducts({ payload, productCart, setProductCart }) {
  const detailProduct = payload?.data?.map((item, i) => (
    <CardProduct
      key={i}
      product={item}
      productCart={productCart}
      setProductCart={setProductCart}
    />
  ));

  return (
    <ProductContainer>
      <h1 className="title-products">{payload.name}</h1>
      <div className="card-products">{detailProduct}</div>
    </ProductContainer>
  );
}
