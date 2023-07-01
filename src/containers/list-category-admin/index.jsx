import React from "react";
import styles from "./list-category-admin.module.scss";
import formattedText from "@/src/utils/formattedText";
import { Button } from "@/src/components";

export default function ListCategoryAdmin({ categories, setSelectedCategory }) {
  const selectedCategory = (name) => {
    setSelectedCategory(name);
  };

  return (
    <div>
      <h3>Category</h3>
      <div className={styles.list_category__admin}>
        {!categories && <p>Loading..</p>}
        {categories?.map((item, i) => {
          return (
            <div key={i}>
              <p onClick={() => selectedCategory(item.title)}>
                {formattedText(item.title)}
              </p>
            </div>
          );
        })}
        <Button>Add Category +</Button>
      </div>
    </div>
  );
}
