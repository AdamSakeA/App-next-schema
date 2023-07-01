import Router from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Layout } from "@/src/components";
import {
  TableAdmin,
  PopupCreateProduct,
  ListCategoryAdmin,
} from "@/src/containers";
import { useGetAllCategories, useGetProductsByCategory } from "@/src/hooks/";
import styles from "./dashboard.module.scss";

export default function AdminDashboardPage() {
  const { data, status } = useSession();
  const { categories } = useGetAllCategories(`/admin/categories`);
  const [selectedCategory, setSelectedCategory] = useState("sate_taichan");
  const { products } = useGetProductsByCategory(
    `/admin/${selectedCategory}`,
    selectedCategory
  );
  const [toggleCreateProduct, setToggleCreateProduct] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/admin/signin");
  }, [data, status]);

  if (status === "loading") return <h1>Loading...</h1>;

  return (
    <Layout title={"Dashboard Admin"}>
      {toggleCreateProduct && (
        <PopupCreateProduct
          toggle={setToggleCreateProduct}
          category={categories}
        />
      )}
      <div className={styles.admin_data}>
        <h1>Welcome back, {data?.user?.name}</h1>
        <div className={styles.admin_data__data}>
          <ListCategoryAdmin
            categories={categories}
            setSelectedCategory={setSelectedCategory}
          />
          <TableAdmin
            data={products?.results?.products}
            toggle={setToggleCreateProduct}
          />
        </div>
      </div>
    </Layout>
  );
}
