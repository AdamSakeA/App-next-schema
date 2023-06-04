import { CardTitleProduct } from "@/src/components";

export default function ListTypeProducts(props) {
  const { data, productFiltered, setProductFiltered } = props;

  const titleProduct = data?.map((item, i) => (
    <CardTitleProduct
      key={i}
      product={item}
      productFiltered={productFiltered}
      setProductFiltered={setProductFiltered}
    />
  ));

  return titleProduct;
}
