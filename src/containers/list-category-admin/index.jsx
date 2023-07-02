import React, { useState } from "react";
import styles from "./list-category-admin.module.scss";
import formattedText from "@/src/utils/formattedText";
import { Button } from "@/src/components";

export default function ListCategoryAdmin({ categories, setSelectedCategory }) {
  const [isActive, setIsActive] = useState("sate_taichan");

  const selectedCategory = (name) => {
    setIsActive(name);
    setSelectedCategory(name);
  };

  return (
    <div>
      <div className={styles.list_category__admin}>
        {!categories && <p>Loading..</p>}
        {categories?.map((item, i) => {
          return (
            <div
              className={`${styles.list_category__link} ${
                isActive === item.title ? styles.active : null
              } `}
              key={i}
            >
              <p onClick={() => selectedCategory(item.title)}>
                {formattedText(item.title)}
              </p>
            </div>
          );
        })}
        <Button styled="secondary" className={styles.list_category__button}>
          Add Category +
        </Button>
      </div>
    </div>
  );
}
