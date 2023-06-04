import { useState } from "react";
import { ListItemProducts, ListTypeProducts, Cart } from "..";
import {
  Container,
  ProductContainer,
  TypesContainer,
  ShopContainer,
} from "./list-products.styles";
import {
  CardTitleProductSkeleton,
  CardProductSkeleton,
} from "@/src/components";

export default function ListProducts({ payload, isLoading }) {
  const [productFiltered, setProductFiltered] = useState({
    name: payload[0]?.name,
    data: payload[0]?.data,
  });

  const [productCart, setProductCart] = useState([]);

  const showTypes = isLoading ? (
    <CardTitleProductSkeleton />
  ) : (
    <ListTypeProducts
      data={payload}
      productFiltered={productFiltered}
      setProductFiltered={setProductFiltered}
    />
  );

  const showProducts = isLoading ? (
    <CardProductSkeleton />
  ) : (
    <ListItemProducts
      products={productFiltered.data}
      productCart={productCart}
      setProductCart={setProductCart}
    />
  );

  return (
    <Container>
      {/* left */}
      <ShopContainer>
        <TypesContainer>{showTypes}</TypesContainer>
        <ProductContainer>{showProducts}</ProductContainer>
      </ShopContainer>
      {/* right */}
      <Cart productCart={productCart} setProductCart={setProductCart} />
    </Container>
  );
}
