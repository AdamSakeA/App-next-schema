import CardTitleProduct from "@/src/components/card-title-product";
import { Container } from "./list-type-products.styles";

export default function ListTypeProducts({ payload, setProductFiltered }) {
  const getProductFiltered = (name, data) => {
    setProductFiltered({ name, data });
  };

  const titleProduct = payload?.map((item, i) => {
    return (
      <Container
        key={i}
        onClick={() => getProductFiltered(item.name, item.data)}
      >
        <CardTitleProduct title={item.name} />
      </Container>
    );
  });

  return titleProduct;
}
