import { deleteFood, getFood, getFoods } from "@services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Food } from "@types";

//const queryclient = useQueryClient();
const QUERY_KEY = "foods";

export const useGetFoods = () =>
  useQuery<Food[]>({
    queryKey: [QUERY_KEY],
    queryFn: () => getFoods().then(({ data }) => data),
  });

export const useGetFood = (id?: string) =>
  useQuery<Food>({
    queryKey: [QUERY_KEY, id],
    queryFn: () => getFood(id!).then(({ data }) => data),
    enabled: id !== "new",
    retry: false,
  });

export const useDeleteFood = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteFood(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });
};
