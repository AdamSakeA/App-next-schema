import React from "react";

import {
  CardTitle,
  IconSate,
  IconMinuman,
  IconPaket,
} from "./card-title-product.styles";

export default function CardTitleProduct({ title }) {
  const Icon = () => {
    if (title === "Sate Taichan") {
      return <IconSate />;
    }
    if (title === "Minuman") {
      return <IconMinuman />;
    }
    if (title === "Paket Bucin") {
      return <IconPaket />;
    }
  };

  return (
    <CardTitle>
      <Icon />
      <h1>{title}</h1>
    </CardTitle>
  );
}
