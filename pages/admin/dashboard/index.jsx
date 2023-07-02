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
  const { categories } = useGetAllCategories();
  const [selectedCategory, setSelectedCategory] = useState("sate_taichan");
  const [message, setMessage] = useState();
  const { products, refetch, isRefetching } = useGetProductsByCategory(
    `/admin/${selectedCategory}`,
    selectedCategory
  );
  const [toggleCreateProduct, setToggleCreateProduct] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/admin/signin");
  }, [data, status]);

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "unauthenticated") {
    return (
      <Layout title={"Dashboard Admin"}>
        <h1>Harap login terlebih dahulu!</h1>
      </Layout>
    );
  }

  return (
    <Layout title={"Dashboard Admin"}>
      {toggleCreateProduct && (
        <PopupCreateProduct
          toggle={setToggleCreateProduct}
          category={categories}
          setMessage={setMessage}
          refetch={refetch}
        />
      )}
      <div className={styles.admin_data}>
        <h1>Welcome back, {data?.user?.name}</h1>
        <h1 onClick={() => setMessage("")}>{message}</h1>
        <div className={styles.admin_data__data}>
          <ListCategoryAdmin
            categories={categories}
            setSelectedCategory={setSelectedCategory}
          />
          <TableAdmin
            data={products?.results?.products}
            toggle={setToggleCreateProduct}
            refetch={refetch}
            isRefetching={isRefetching}
            setMessage={setMessage}
          />
        </div>
      </div>
    </Layout>
  );
}
