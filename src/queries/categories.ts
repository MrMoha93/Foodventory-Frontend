import { getCategories } from "@services";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@types";

export const useGetCategories = () =>
  useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => getCategories().then((res) => res.data),
    staleTime: Infinity,
  });
