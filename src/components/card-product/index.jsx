import { Card, Content } from "./card-product.styles";
import Image from "next/image";

export default function CardProduct({ product, productCart, setProductCart }) {
  const addToCart = (product) => {
    const existingProductIndex = productCart.findIndex(
      (p) => p.title === product.title
    );
    if (existingProductIndex !== -1) {
      const updatedProductCart = [...productCart];
      updatedProductCart[existingProductIndex].quantity += 1;
      setProductCart(updatedProductCart);
    } else {
      setProductCart((prevProductCart) => [
        ...prevProductCart,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <Card onClick={() => addToCart(product)}>
      <Image
        className="image-card__product"
        src={product?.image}
        alt={product?.title}
        width={200}
        height={200}
      />
      <Content>
        <h2 className="title-card">{product?.title}</h2>
        <p className="desc-card">{product?.desc}</p>
        <h3 className="price-card">Rp.{product?.price}</h3>
      </Content>
    </Card>
  );
}
