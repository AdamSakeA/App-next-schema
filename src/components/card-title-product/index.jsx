import styles from "./card-title-product.module.scss";
// icons
import {
  MdOutlineFoodBank as IconSate,
  MdOutlineEmojiFoodBeverage as IconMinuman,
} from "react-icons/md";
import { IoFastFoodOutline as IconPaket } from "react-icons/io5";

export default function CardTitleProduct(props) {
  const { product, productFiltered, setProductFiltered } = props;

  const isActive = () => {
    if (product.name === productFiltered.name) {
      return `${styles.card_title} ${styles.active}`;
    } else {
      return styles.card_title;
    }
  };

  const Icon = () => {
    if (product.name === "Sate Taichan") {
      return <IconSate className={styles.card_title__icon} />;
    }
    if (product.name === "Minuman") {
      return <IconMinuman className={styles.card_title__icon} />;
    }
    if (product.name === "Paket Bucin") {
      return <IconPaket className={styles.card_title__icon} />;
    }
  };

  const getProductFiltered = (name, data) => {
    setProductFiltered({ name, data });
  };

  return (
    <div
      className={isActive()}
      onClick={() => getProductFiltered(product.name, product.data)}
    >
      <Icon />
      <h3>{product.name}</h3>
    </div>
  );
}
