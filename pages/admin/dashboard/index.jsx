import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Layout } from "@/src/components";
import { useGetAllCategories, useGetProductsByCategory } from "@/src/hooks/";
import {
  TableAdmin,
  PopupCreateProduct,
  ListCategoryAdmin,
} from "@/src/containers";
import styles from "./dashboard.module.scss";

export default function AdminDashboardPage() {
  const { data: session, status } = useSession();
  const { categories } = useGetAllCategories();
  const [selectedCategory, setSelectedCategory] = useState("sate_taichan");
  const [message, setMessage] = useState();
  const { products, refetch, isRefetching } = useGetProductsByCategory(
    `/categories/${selectedCategory}`,
    selectedCategory
  );
  const [toggleCreateProduct, setToggleCreateProduct] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (
      !session ||
      (session.role !== "admin" && session.role !== "superadmin")
    ) {
      router.replace("/admin/signin");
    }
  }, [router, session]);

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
        <h1>Welcome back, {session?.user?.name}</h1>
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
