import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: cart = [] } = useQuery({
    queryKey: ["cart", user.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/api/carts?email=${user?.email}`);
      return result.data;
    },
  });

  return [cart];
};

export default useCart;
