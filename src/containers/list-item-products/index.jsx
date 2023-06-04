import { CardProduct } from "@/src/components";

export default function ListItemProducts(props) {
  const { products, productCart, setProductCart } = props;
  const showProduct = products.map((item, i) => (
    <CardProduct
      key={i}
      product={item}
      productCart={productCart}
      setProductCart={setProductCart}
    />
  ));

  return showProduct;
}
