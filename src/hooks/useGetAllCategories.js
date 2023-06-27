import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/api";

export default function useGetAllCategories(queryKey = "categories") {
  const { data, isLoading, isError } = useQuery([queryKey], () =>
    getAllCategories()
  );

  return { categories: data, isLoading, isError };
}
