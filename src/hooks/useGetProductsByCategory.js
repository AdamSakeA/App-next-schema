import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/api";

export default function useGetProductsByCategory(queryKey = "", category) {
  const { data, isLoading, isError } = useQuery(
    [queryKey],
    () => getProductsByCategory(category),
    {
      enabled: !!category,
    }
  );

  return { products: data, isLoading, isError };
}

// import { useQuery } from "@tanstack/react-query";
// import { getPokemonAbility } from "../services/api";

// export default function useGetPokemonAbility(queryKey = "", ability) {
//   const { data, isLoading, isError } = useQuery(
//     [queryKey],
//     () => getPokemonAbility(ability),
//     {
//       enabled: !!ability,
//     }
//   );

//   return { abilities: data, isLoading, isError };
// }
