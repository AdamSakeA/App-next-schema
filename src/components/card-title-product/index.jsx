import { CardTitle } from "./card-title-product.styles";
import { IconSate, IconMinuman, IconPaket } from "@/styles/icons.styles";

export default function CardTitleProduct(props) {
  const { product, productFiltered, setProductFiltered } = props;

  const Icon = () => {
    if (product.name === "Sate Taichan") {
      return <IconSate />;
    }
    if (product.name === "Minuman") {
      return <IconMinuman />;
    }
    if (product.name === "Paket Bucin") {
      return <IconPaket />;
    }
  };

  const getProductFiltered = (name, data) => {
    setProductFiltered({ name, data });
  };

  return (
    <CardTitle
      active={product.name === productFiltered.name ? true : false}
      onClick={() => getProductFiltered(product.name, product.data)}
    >
      <Icon />
      <h3>{product.name}</h3>
    </CardTitle>
  );
}
